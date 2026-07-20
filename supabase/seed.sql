-- SIMO Portfolio Seed Data

-- Categories
insert into public.categories (name, slug, type, description) values
('Restaurant Branding', 'restaurant-branding', 'project', 'Restaurant and hospitality branding'),
('Brand Identity', 'brand-identity', 'project', 'Full brand identity systems'),
('Packaging', 'packaging', 'project', 'Packaging design'),
('Hotel Branding', 'hotel-branding', 'project', 'Hotel and riad branding'),
('Process', 'process', 'journal', 'Behind the scenes'),
('Inspiration', 'inspiration', 'journal', 'Inspiration and moodboards')
on conflict (slug) do nothing;

-- Clients
insert into public.clients (name, slug, website) values
('Atelier Noir', 'atelier-noir', 'https://atelier-noir.ma'),
('Riad Marmara', 'riad-marmara', 'https://riad-marmara.com'),
('Sahra', 'sahra', 'https://sahra.ma'),
('Majordome Hotel', 'majordome-hotel', 'https://majordome.ma')
on conflict (slug) do nothing;

-- Projects
insert into public.projects (slug, title, client_name, category, year, location, cover_url, description, challenge, solution, outcome, services, colors, typography, gallery, featured, status, published_at) values
(
  'atelier-noir-restaurant',
  'Atelier Noir',
  'Atelier Noir',
  'Restaurant Branding',
  '2024',
  'Marrakech, Morocco',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
  'Complete brand identity for a fine dining restaurant hidden in the medina, blending traditional Moroccan craft with contemporary gastronomy.',
  'Create a brand that feels both deeply rooted in Marrakech and internationally relevant for a luxury dining audience.',
  'We developed a minimal wordmark with custom Arabic-Latin typography, a terracotta and limestone palette inspired by riad walls, and packaging that references traditional pottery textures.',
  'Featured in Wallpaper* and Architectural Digest. 340% increase in reservations within 3 months.',
  array['Brand Strategy', 'Visual Identity', 'Packaging', 'Signage'],
  '[{"name": "Terracotta", "hex": "#C17B5F"}, {"name": "Limestone", "hex": "#EDE6DC"}, {"name": "Charcoal", "hex": "#171614"}]'::jsonb,
  '[{"name": "Cormorant Garamond", "usage": "Display"}, {"name": "Inter", "usage": "Body"}]'::jsonb,
  '["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070", "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974"]'::jsonb,
  true,
  'published',
  now()
),
(
  'riad-marmara-packaging',
  'Riad Marmara',
  'Riad Marmara',
  'Packaging',
  '2024',
  'Marrakech, Morocco',
  'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2070',
  'Luxury guest amenity packaging for a boutique riad, inspired by handcrafted zellige and desert light.',
  'Design packaging that feels luxurious yet sustainable, using local materials.',
  'Uncoated recycled paper with blind emboss, terracotta foil, and custom illustrations of architectural details.',
  'Guests consistently mention packaging as highlight. Sold in concept stores in Paris and Milan.',
  array['Packaging', 'Illustration', 'Art Direction'],
  '[{"name": "Desert Sand", "hex": "#D6C1A0"}, {"name": "Clay", "hex": "#C17B5F"}]'::jsonb,
  '[{"name": "Instrument Serif", "usage": "Display"}]'::jsonb,
  '["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932"]'::jsonb,
  true,
  'published',
  now()
)
on conflict (slug) do nothing;

-- Services
insert into public.services (slug, title, subtitle, description, features, price, duration, status, order_index) values
('brand-identity', 'Brand Identity', 'Foundations that endure', 'We build brands from the ground up — strategy, naming, visual identity, and guidelines that stand the test of time.', array['Brand Strategy & Positioning', 'Visual Identity System', 'Typography & Color', 'Brand Guidelines', 'Stationery & Collateral'], 'From 45,000 MAD', '6-8 weeks', 'published', 1),
('packaging-design', 'Packaging Design', 'Objects of desire', 'Packaging that tells a story before it is opened. We design for shelf, hand, and memory.', array['Concept & Structure', 'Material Research', 'Sustainable Solutions', 'Production Follow-up', 'Unboxing Experience'], 'From 30,000 MAD', '4-6 weeks', 'published', 2),
('restaurant-branding', 'Restaurant Branding', 'Taste made visible', 'Specialized in hospitality — menus, signage, uniforms, digital presence.', array['Restaurant Identity', 'Menu Design', 'Signage & Wayfinding', 'Uniforms & Textiles', 'Photography Direction'], 'From 65,000 MAD', '8-12 weeks', 'published', 3)
on conflict (slug) do nothing;

-- Testimonials
insert into public.testimonials (name, role, company, content, rating, featured, status) values
('Leïla Benali', 'Founder', 'Atelier Noir', 'SIMO understood our vision before we could articulate it. The identity feels like it has always existed in Marrakech. Quiet, confident, timeless.', 5, true, 'published'),
('Youssef El Amrani', 'Creative Director', 'Riad Marmara', 'Every detail was considered — from the blind emboss to the weight of the paper. Our guests steal the packaging, which is the best compliment.', 5, true, 'published'),
('Clara Dubois', 'Founder', 'Sahra', 'Working with SIMO elevated Sahra from a product to a luxury house. We are now in Paris because the brand speaks that language.', 5, true, 'published')
on conflict do nothing;

-- Journal
insert into public.journal_posts (slug, title, excerpt, content, cover_url, category, read_time, status, published_at) values
('craft-of-terracotta', 'The Craft of Terracotta: Why Imperfection is Luxury', 'In a world of perfect vectors, the slight variation of handmade terracotta reminds us what luxury really means.', 'Full article about terracotta craftsmanship...', 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070', 'Process', '4 min', 'published', now()),
('swiss-moroccan-minimalism', 'Swiss Grids, Moroccan Light', 'How the precision of Swiss design finds a natural home in the shadow play of riad architecture.', 'Full article...', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070', 'Inspiration', '6 min', 'published', now())
on conflict (slug) do nothing;
