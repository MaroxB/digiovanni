import { useState } from 'react'

/* ─── DATA ─────────────────────────────────────────────────────── */
const DISHES = [
  {
    name: 'Tagliatelle al Tartufo',
    desc: 'Hand-rolled egg pasta, black truffle shavings, aged Parmigiano, and a touch of butter from the alpine farms of Lombardy.',
    price: 'AED 145',
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
  },
  {
    name: 'Margherita Verace',
    desc: 'San Marzano tomato, fior di latte mozzarella, fresh basil, extra-virgin olive oil. Baked in our wood-fired oven at 485°C.',
    price: 'AED 88',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
  },
  {
    name: 'Osso Buco alla Milanese',
    desc: 'Slow-braised veal shank, saffron risotto, gremolata. A Sunday classic from the heart of Milan — prepared here with the same patience.',
    price: 'AED 195',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
  },
]

const MENU_CATEGORIES = [
  {
    title: 'Antipasti',
    items: [
      { name: 'Bruschetta al Pomodoro', price: 'AED 42' },
      { name: 'Burrata con Prosciutto', price: 'AED 78' },
      { name: 'Carpaccio di Manzo', price: 'AED 92' },
    ],
  },
  {
    title: 'Pasta',
    items: [
      { name: 'Cacio e Pepe', price: 'AED 95' },
      { name: 'Pappardelle al Ragù', price: 'AED 110' },
      { name: 'Spaghetti alle Vongole', price: 'AED 125' },
    ],
  },
  {
    title: 'Pizza',
    items: [
      { name: 'Diavola', price: 'AED 94' },
      { name: 'Quattro Formaggi', price: 'AED 98' },
      { name: 'Tartufo Bianco', price: 'AED 118' },
    ],
  },
  {
    title: 'Dolci',
    items: [
      { name: 'Tiramisù della Casa', price: 'AED 52' },
      { name: 'Panna Cotta al Caramello', price: 'AED 48' },
      { name: 'Cannolo Siciliano', price: 'AED 55' },
    ],
  },
]

const GALLERY_IMGS = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80',
  'https://images.unsplash.com/photo-1551183053-bf91798d047a?w=600&q=80',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
  'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
]

/* ─── HEADER ────────────────────────────────────────────────────── */
function Header() {
  return (
    <header style={{ backgroundColor: '#F4EFE6' }} className="w-full">
      <div className="border-b-2 border-black border-opacity-20" />
      <div className="py-6 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-1"
          style={{ fontFamily: 'Lora, serif', color: '#2E5E3E' }}
        >
          Ristorante
        </p>
        <h1
          className="text-4xl md:text-5xl tracking-widest uppercase"
          style={{ fontFamily: 'Cinzel, serif', color: '#1A1A1A' }}
        >
          Di Giovanni
        </h1>
        <p
          className="mt-2 text-sm tracking-[0.12em]"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1A1A1A', fontStyle: 'italic' }}
        >
          Authentic Italian cuisine in the heart of Dubai
        </p>
      </div>
      <div className="divider-strong" style={{ borderColor: '#1A1A1A', borderTopWidth: '1px', opacity: 0.2 }} />
      <nav className="flex justify-center gap-4 md:gap-8 py-3 px-4 flex-wrap">
        {['Menu', 'About', 'Gallery', 'Reservations'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-[0.2em] uppercase hover:underline"
            style={{ fontFamily: 'Cinzel, serif', color: '#1A1A1A' }}
          >
            {item}
          </a>
        ))}
      </nav>
      <div style={{ borderTop: '1px solid #1A1A1A', opacity: 0.2 }} />
    </header>
  )
}

/* ─── HERO ──────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ backgroundColor: '#E8D9C5', minHeight: '520px' }}
    >
      {/* Left */}
      <div className="flex flex-col justify-center px-6 md:px-16 py-12 md:py-16 fade-in">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: 'Cinzel, serif', color: '#2E5E3E' }}
        >
          Since 1998 · Dubai, UAE
        </p>
        <h2
          className="text-4xl md:text-5xl leading-tight mb-6"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
        >
          A taste of Italy,<br />
          <em>far from home.</em>
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-sm"
          style={{ fontFamily: 'Lora, serif', color: '#1A1A1A', opacity: 0.8 }}
        >
          We cook the way our grandmothers taught us — slowly, with care, and with the
          finest ingredients brought straight from Italy. Every dish tells a story.
          We invite you to sit, stay, and eat well.
        </p>
        <a href="#reservations" className="btn-primary btn-red self-start">
          Book Your Table
        </a>
      </div>

      {/* Right */}
      <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
        <img
          src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=900&q=80"
          alt="Pasta dish"
          className="w-full h-full object-cover fade-in"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        />
        {/* gradient blends into left panel on desktop, fades top on mobile */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to right, #E8D9C5 0%, transparent 25%)' }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to bottom, #E8D9C5 0%, transparent 30%)' }}
        />
      </div>
    </section>
  )
}

/* ─── SIGNATURE DISHES ──────────────────────────────────────────── */
function SignatureDishes() {
  return (
    <section id="dishes" className="py-20 px-6 md:px-16" style={{ backgroundColor: '#F4EFE6' }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-2"
            style={{ fontFamily: 'Cinzel, serif', color: '#A61E22' }}
          >
            Dal Forno
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
          >
            From the Kitchen
          </h2>
          <div className="mt-4 mx-auto" style={{ width: 48, borderTop: '2px solid #A61E22' }} />
        </div>

        {/* Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {DISHES.map((dish, i) => (
            <div
              key={dish.name}
              className="border border-black"
              style={{ borderColor: '#1A1A1A', borderOpacity: 0.15, borderWidth: '1px' }}
            >
              <div style={{ height: 240, overflow: 'hidden' }}>
                <img
                  src={dish.img}
                  alt={dish.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3
                    className="text-lg"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
                  >
                    {dish.name}
                  </h3>
                  <span
                    className="text-sm ml-4 whitespace-nowrap"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#A61E22' }}
                  >
                    {dish.price}
                  </span>
                </div>
                <div style={{ borderTop: '1px solid #1A1A1A', opacity: 0.15, marginBottom: '0.75rem' }} />
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Lora, serif', color: '#1A1A1A', opacity: 0.75 }}
                >
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#menu" className="btn-primary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── STORY ─────────────────────────────────────────────────────── */
function Story() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16"
      style={{ backgroundColor: '#E8D9C5' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-2"
              style={{ fontFamily: 'Cinzel, serif', color: '#A61E22' }}
            >
              La Nostra Storia
            </p>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
            >
              La Famiglia
            </h2>
            <div style={{ borderTop: '2px solid #1A1A1A', opacity: 0.2, marginBottom: '1.5rem' }} />
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ fontFamily: 'Lora, serif', color: '#1A1A1A', opacity: 0.85 }}
            >
              <p>
                Di Giovanni was born in 1998 from a simple idea: that the world deserved more
                tables like the ones in Napoli — long, loud, and full of food made with love.
              </p>
              <p>
                Marco di Giovanni arrived in Dubai carrying nothing but two suitcases and his
                mother's handwritten recipe book. He opened a small trattoria in Jumeirah with
                six tables. Word spread fast. The place filled up and never emptied.
              </p>
              <p>
                Today, the same recipes are on the table. The pasta is still rolled by hand.
                The bread still bakes at dawn. And the family — now three generations strong — is
                still in the kitchen every night.
              </p>
            </div>
          </div>

          {/* Image */}
          <div style={{ border: '8px solid #E8D9C5', outline: '1px solid rgba(26,26,26,0.2)' }}>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80"
              alt="Restaurant interior"
              style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── MENU PREVIEW ──────────────────────────────────────────────── */
function MenuPreview() {
  return (
    <section id="menu" className="py-20 px-6 md:px-16" style={{ backgroundColor: '#F4EFE6' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-2"
            style={{ fontFamily: 'Cinzel, serif', color: '#A61E22' }}
          >
            Il Menù
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
          >
            What We Serve
          </h2>
          <div className="mt-4 mx-auto" style={{ width: 48, borderTop: '2px solid #A61E22' }} />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0"
          style={{ border: '1px solid rgba(26,26,26,0.15)' }}
        >
          {MENU_CATEGORIES.map((cat, ci) => (
            <div
              key={cat.title}
              className="p-6 md:p-8"
              style={{ borderRight: '1px solid rgba(26,26,26,0.15)', borderBottom: '1px solid rgba(26,26,26,0.15)' }}
            >
              <h3
                className="text-xl mb-1"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
              >
                {cat.title}
              </h3>
              <div style={{ borderTop: '2px solid #A61E22', width: 32, marginBottom: '1rem' }} />
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between items-baseline">
                      <span
                        className="text-sm"
                        style={{ fontFamily: 'Lora, serif', color: '#1A1A1A' }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="text-xs ml-2 whitespace-nowrap"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#A61E22' }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <div style={{ borderTop: '1px dotted rgba(26,26,26,0.2)', marginTop: '0.4rem' }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── GALLERY ───────────────────────────────────────────────────── */
function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 md:px-16" style={{ backgroundColor: '#E8D9C5' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-2"
            style={{ fontFamily: 'Cinzel, serif', color: '#A61E22' }}
          >
            La Nostra Casa
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
          >
            Ambience & Food
          </h2>
          <div className="mt-4 mx-auto" style={{ width: 48, borderTop: '2px solid #A61E22' }} />
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: 2 }}
        >
          {GALLERY_IMGS.map((src, i) => (
            <div
              key={i}
              className="gallery-img"
              style={{ height: 220 }}
            >
              <img src={src} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── RESERVATION ───────────────────────────────────────────────── */
function Reservation() {
  const [form, setForm] = useState({ name: '', guests: '2', date: '', time: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservations" className="py-20 px-6 md:px-16" style={{ backgroundColor: '#F4EFE6' }}>
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-2"
            style={{ fontFamily: 'Cinzel, serif', color: '#A61E22' }}
          >
            Prenotazioni
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
          >
            Book Your Table
          </h2>
          <div className="mt-4 mx-auto" style={{ width: 48, borderTop: '2px solid #A61E22' }} />
        </div>

        {/* Card */}
        <div
          className="px-5 py-8 md:px-10 md:py-10"
          style={{
            border: '1px solid rgba(26,26,26,0.3)',
            backgroundColor: '#EDE5D8',
          }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <p
                className="text-xl mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: '#2E5E3E' }}
              >
                Grazie, {form.name}.
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: 'Lora, serif', color: '#1A1A1A', opacity: 0.75 }}
              >
                Your reservation request has been received. We will confirm your table
                by phone or email within a few hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: 'Cinzel, serif', color: '#1A1A1A', opacity: 0.7 }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm outline-none"
                    style={{
                      border: '1px solid rgba(26,26,26,0.35)',
                      backgroundColor: '#F4EFE6',
                      fontFamily: 'Lora, serif',
                      color: '#1A1A1A',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: 'Cinzel, serif', color: '#1A1A1A', opacity: 0.7 }}>
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm outline-none"
                    style={{
                      border: '1px solid rgba(26,26,26,0.35)',
                      backgroundColor: '#F4EFE6',
                      fontFamily: 'Lora, serif',
                      color: '#1A1A1A',
                    }}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: 'Cinzel, serif', color: '#1A1A1A', opacity: 0.7 }}>
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm outline-none"
                    style={{
                      border: '1px solid rgba(26,26,26,0.35)',
                      backgroundColor: '#F4EFE6',
                      fontFamily: 'Lora, serif',
                      color: '#1A1A1A',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: 'Cinzel, serif', color: '#1A1A1A', opacity: 0.7 }}>
                    Time
                  </label>
                  <select
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm outline-none"
                    style={{
                      border: '1px solid rgba(26,26,26,0.35)',
                      backgroundColor: '#F4EFE6',
                      fontFamily: 'Lora, serif',
                      color: '#1A1A1A',
                    }}
                  >
                    <option value="">Select time</option>
                    {['12:00','12:30','13:00','13:30','14:00','19:00','19:30','20:00','20:30','21:00','21:30','22:00'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: 'Cinzel, serif', color: '#1A1A1A', opacity: 0.7 }}>
                  Special Requests <span style={{ opacity: 0.5 }}>(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm outline-none resize-none"
                  style={{
                    border: '1px solid rgba(26,26,26,0.35)',
                    backgroundColor: '#F4EFE6',
                    fontFamily: 'Lora, serif',
                    color: '#1A1A1A',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary btn-red w-full mt-2">
                Reserve My Table
              </button>
            </form>
          )}
        </div>

        <p
          className="text-center text-xs mt-6"
          style={{ fontFamily: 'Lora, serif', color: '#1A1A1A', opacity: 0.5, fontStyle: 'italic' }}
        >
          Or call us directly: +971 4 123 4567
        </p>
      </div>
    </section>
  )
}

/* ─── FOOTER ────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#F4EFE6' }} className="py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl tracking-widest uppercase mb-3"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Di Giovanni
            </h3>
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.25)', marginBottom: '1rem' }} />
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'Lora, serif', opacity: 0.65, fontStyle: 'italic' }}
            >
              "From our kitchen to your table."
            </p>
            <p
              className="text-xs mt-3 tracking-widest"
              style={{ fontFamily: 'Cinzel, serif', color: '#A61E22' }}
            >
              Family owned. Since 1998.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Cinzel, serif', opacity: 0.6 }}
            >
              Opening Hours
            </h4>
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.25)', marginBottom: '1rem' }} />
            <ul
              className="space-y-2 text-sm"
              style={{ fontFamily: 'Lora, serif', opacity: 0.75 }}
            >
              <li className="flex justify-between"><span>Mon – Fri</span><span>12:00 – 23:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>12:00 – 00:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>13:00 – 22:00</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Cinzel, serif', opacity: 0.6 }}
            >
              Find Us
            </h4>
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.25)', marginBottom: '1rem' }} />
            <address
              className="not-italic space-y-2 text-sm"
              style={{ fontFamily: 'Lora, serif', opacity: 0.75 }}
            >
              <p>12 Al Wasl Road, Jumeirah</p>
              <p>Dubai, UAE</p>
              <p className="mt-3">+971 4 123 4567</p>
              <p>info@digiovanni.ae</p>
            </address>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(244,239,230,0.15)', paddingTop: '1.5rem' }}>
          <p
            className="text-center text-xs"
            style={{ fontFamily: 'Cinzel, serif', opacity: 0.35, letterSpacing: '0.15em' }}
          >
            © 2024 Di Giovanni Ristorante — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── APP ───────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="paper-texture">
      <Header />
      <Hero />
      <SignatureDishes />
      <Story />
      <MenuPreview />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  )
}
