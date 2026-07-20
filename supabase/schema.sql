-- SIMO Portfolio - Production Ready Supabase Schema
-- PostgreSQL 17 - Enable required extensions

-- Extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- Profiles table (extends auth.users)
create table public.profiles (
  id uuid primary references auth.users on delete cascade not null,
  email text not null,
  full_name text,
  avatar_url text,
  role text not null default 'editor' check (role in ('admin', 'editor', 'viewer')),
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Categories
create table public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  type text not null check (type in ('project', 'journal', 'service')),
  description text,
  created_at timestamp with time zone default now() not null
);

-- Clients
create table public.clients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  logo_url text,
  website text,
  description text,
  created_at timestamp with time zone default now() not null
);

-- Projects
create table public.projects (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  title text not null,
  client_id uuid references public.clients(id) on delete set null,
  client_name text not null,
  category text not null,
  category_id uuid references public.categories(id) on delete set null,
  year text not null,
  location text not null default 'Marrakech, Morocco',
  cover_url text not null,
  description text not null,
  challenge text,
  solution text,
  outcome text,
  services text[] default '{}',
  colors jsonb default '[]'::jsonb,
  typography jsonb default '[]'::jsonb,
  gallery jsonb default '[]'::jsonb,
  featured boolean default false not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  seo_title text,
  seo_description text,
  og_image_url text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null,
  published_at timestamp with time zone
);

-- Services
create table public.services (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  title text not null,
  subtitle text,
  description text not null,
  features text[] default '{}',
  price text,
  duration text,
  image_url text,
  status text not null default 'published' check (status in ('draft', 'published', 'archived')),
  order_index integer default 0,
  seo_title text,
  seo_description text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Testimonials
create table public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null,
  company text not null,
  content text not null,
  avatar_url text,
  project_slug text,
  project_id uuid references public.projects(id) on delete set null,
  rating integer default 5 check (rating >=1 and rating <=5),
  featured boolean default false,
  status text not null default 'published' check (status in ('draft', 'published', 'archived')),
  created_at timestamp with time zone default now() not null
);

-- Journal posts
create table public.journal_posts (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  cover_url text,
  category text,
  category_id uuid references public.categories(id) on delete set null,
  read_time text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  seo_title text,
  seo_description text,
  og_image_url text,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Media library
create table public.media (
  id uuid primary key default uuid_generate_v4(),
  file_name text not null,
  file_path text not null,
  file_size integer,
  mime_type text,
  url text not null,
  alt_text text,
  width integer,
  height integer,
  created_at timestamp with time zone default now() not null,
  created_by uuid references public.profiles(id) on delete set null
);

-- Inquiries
create table public.inquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  company text,
  budget text,
  service text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'archived', 'replied')),
  created_at timestamp with time zone default now() not null
);

-- Site settings
create table public.site_settings (
  id uuid primary key default uuid_generate_v4(),
  key text not null unique,
  value jsonb not null,
  description text,
  updated_at timestamp with time zone default now() not null
);

-- Analytics events (simple)
create table public.analytics_events (
  id uuid primary key default uuid_generate_v4(),
  event_type text not null,
  path text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamp with time zone default now() not null
);

-- Indexes
create index projects_slug_idx on public.projects(slug);
create index projects_status_idx on public.projects(status);
create index projects_featured_idx on public.projects(featured);
create index projects_year_idx on public.projects(year desc);
create index journal_slug_idx on public.journal_posts(slug);
create index journal_status_idx on public.journal_posts(status);
create index inquiries_status_idx on public.inquiries(status);
create index inquiries_created_at_idx on public.inquiries(created_at desc);
create index media_created_at_idx on public.media(created_at desc);
create index categories_slug_idx on public.categories(slug);
create index categories_type_idx on public.categories(type);

-- Updated_at triggers
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at_profiles before update on public.profiles for each row execute function public.handle_updated_at();
create trigger set_updated_at_projects before update on public.projects for each row execute function public.handle_updated_at();
create trigger set_updated_at_services before update on public.services for each row execute function public.handle_updated_at();
create trigger set_updated_at_journal before update on public.journal_posts for each row execute function public.handle_updated_at();
create trigger set_updated_at_settings before update on public.site_settings for each row execute function public.handle_updated_at();

-- Handle new user
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', 'editor');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.testimonials enable row level security;
alter table public.journal_posts enable row level security;
alter table public.media enable row level security;
alter table public.inquiries enable row level security;
alter table public.site_settings enable row level security;
alter table public.analytics_events enable row level security;

-- RLS Policies (public read for published, admin full access)

-- Projects: public can read published
create policy "Public can view published projects"
  on public.projects for select
  using (status = 'published');

create policy "Authenticated can manage projects"
  on public.projects for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Services: public read
create policy "Public can view published services"
  on public.services for select
  using (status = 'published');

create policy "Authenticated can manage services"
  on public.services for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Journal: public read published
create policy "Public can view published journal"
  on public.journal_posts for select
  using (status = 'published');

create policy "Authenticated can manage journal"
  on public.journal_posts for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Testimonials: public read published
create policy "Public can view published testimonials"
  on public.testimonials for select
  using (status = 'published');

create policy "Authenticated can manage testimonials"
  on public.testimonials for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Categories, clients: public read, auth write
create policy "Public can view categories" on public.categories for select using (true);
create policy "Auth can manage categories" on public.categories for all using (auth.role()='authenticated') with check (auth.role()='authenticated');

create policy "Public can view clients" on public.clients for select using (true);
create policy "Auth can manage clients" on public.clients for all using (auth.role()='authenticated') with check (auth.role()='authenticated');

-- Media: public read, auth write
create policy "Public can view media" on public.media for select using (true);
create policy "Auth can manage media" on public.media for all using (auth.role()='authenticated') with check (auth.role()='authenticated');

-- Inquiries: only auth can read/write, public can insert via service role or anon insert policy
create policy "Anyone can create inquiry" on public.inquiries for insert with check (true);
create policy "Auth can manage inquiries" on public.inquiries for all using (auth.role()='authenticated') with check (auth.role()='authenticated');

-- Site settings: public read, auth write
create policy "Public can view settings" on public.site_settings for select using (true);
create policy "Auth can manage settings" on public.site_settings for all using (auth.role()='authenticated') with check (auth.role()='authenticated');

-- Profiles: auth can read, admin can manage
create policy "Auth can view profiles" on public.profiles for select using (auth.role()='authenticated');
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Analytics: anyone can insert, auth can read
create policy "Anyone can insert analytics" on public.analytics_events for insert with check (true);
create policy "Auth can view analytics" on public.analytics_events for select using (auth.role()='authenticated');

-- Storage buckets (to be created via dashboard or SQL)
-- Note: Create buckets manually in Supabase Dashboard: media, avatars, projects, journal
-- Then add storage policies via dashboard

-- Seed site settings
insert into public.site_settings (key, value, description) values
('general', '{"site_name": "SIMO — Brand Identity & Packaging", "tagline": "Swiss grids × Moroccan light", "description": "Brand identity, packaging, and restaurant branding studio based in Marrakech."}'::jsonb, 'General site settings'),
('social', '{"instagram": "https://instagram.com/simo.studio", "linkedin": "https://linkedin.com/in/simo", "email": "hello@simo.ma"}'::jsonb, 'Social links'),
('seo', '{"default_title": "SIMO — Brand Identity & Packaging Designer in Marrakech", "default_description": "Brand identity, packaging, and restaurant branding studio based in Marrakech."}'::jsonb, 'SEO defaults')
on conflict (key) do nothing;
