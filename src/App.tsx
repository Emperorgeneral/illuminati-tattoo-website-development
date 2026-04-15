import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Users, Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight, Sparkles, Eye, Droplets, Shield, Heart, Send, Award } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredArtist: '',
    preferredDate: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroSlides = [
    {
      image: '/images/gallery/gallery4.jpg',
      title: 'Custom Tattoos & Professional Piercings',
      subtitle: 'Where Your Vision Comes to Life'
    },
    {
      image: '/images/gallery/gallery6.jpg',
      title: 'Welcome to Illuminati Tattoo',
      subtitle: 'Oregon City\'s Premier Tattoo Studio'
    },
    {
      image: '/images/gallery/gallery7.jpg',
      title: 'Meaningful Art on Your Skin',
      subtitle: 'Custom Designs That Tell Your Story'
    }
  ];

  const artists = [
    {
      name: 'Caleb Brouk',
      handle: '@cbroukztat',
      role: 'Owner & Artist',
      image: '/images/artists/cbroukztatrealimage.webp',
      specialties: ['Abstract', 'Watercolor', 'Black & Grey', 'Botanical', 'Realism', 'Cover-Ups'],
      bio: 'Owner of Illuminati Tattoo Oregon City and sister shop in Vancouver, WA. Specializing in custom pieces that blend multiple styles seamlessly.',
      instagram: 'https://instagram.com/cbroukztat'
    },
    {
      name: 'Alanna',
      handle: '@monarch_tattoo888',
      role: 'Tattoo Artist',
      image: '/images/artists/monarch_tattoo888 .heic',
      specialties: ['Colorful Bright Work', 'Nature-Inspired', 'Bold Lines'],
      bio: '"Ink Mage Mama" bringing vibrant, nature-inspired pieces to life. Every tattoo tells a unique story with bold colors and clean lines.',
      instagram: 'https://instagram.com/monarch_tattoo888'
    },
    {
      name: 'Monica',
      handle: '@piercings_by_monica',
      role: 'Professional Piercer',
      image: '/images/artists/piercings_by_monica.png',
      specialties: ['Full Body Piercings', 'Ear Styling', 'Surface Piercings'],
      bio: 'Professional piercer since 2014. Dedicated to safe, comfortable piercing experiences with expert aftercare guidance.',
      instagram: 'https://instagram.com/piercings_by_monica'
    },
    {
      name: 'Katt Franich',
      handle: '@tattoosbykatt',
      role: 'Tattoo Artist',
      image: '/images/artists/tattoosbykattrealimage.jpg',
      specialties: ['Soft Color Work', 'Birds', 'Detailed Pieces', 'Fine Line'],
      bio: 'Creating delicate, detailed tattoos with soft color palettes. Specializing in birds and intricate fine-line work that stands the test of time.',
      instagram: 'https://instagram.com/tattoosbykatt'
    }
  ];

  const services = [
    {
      icon: Sparkles,
      title: 'Custom Tattoos',
      description: 'One-of-a-kind designs tailored specifically to your vision and story. Collaborative process from concept to completion.'
    },
    {
      icon: Eye,
      title: 'Flash Tattoos',
      description: 'Ready-to-go designs available for quick, beautiful ink. Perfect for walk-ins and spontaneous decisions.'
    },
    {
      icon: Droplets,
      title: 'Cover-Ups',
      description: 'Transform old or unwanted tattoos into fresh, beautiful new artwork. Expert color correction and design techniques.'
    },
    {
      icon: Shield,
      title: 'Professional Piercings',
      description: 'Full body piercing services performed in a sterile environment by our experienced piercer, Monica.'
    }
  ];

  const galleryImages = [
    '/images/gallery/gallery1.jpg',
    '/images/gallery/gallery4.jpg',
    '/images/gallery/gallery6.jpg',
    '/images/gallery/gallery7.jpg'
  ];

  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'First tattoo experience here and it was amazing! Alanna made me feel so comfortable and the result exceeded my expectations. Will definitely be back!',
      source: 'Google'
    },
    {
      name: 'James T.',
      rating: 5,
      text: 'Caleb did an incredible cover-up for me. The attention to detail is unmatched. Clean shop, professional staff, great vibes all around.',
      source: 'Google'
    },
    {
      name: 'Maya R.',
      rating: 5,
      text: 'Monica is the best piercer! Super knowledgeable and gentle. The shop is immaculate and everyone is so welcoming. Highly recommend!',
      source: 'Facebook'
    },
    {
      name: 'Alex K.',
      rating: 5,
      text: 'Katt\'s fine line work is stunning! Such a welcoming atmosphere for everyone. This is my go-to shop from now on.',
      source: 'Google'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'artists', 'services', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredArtist: '',
        preferredDate: ''
      });
    }, 3000);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'artists', label: 'Artists' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Eye className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                ILLUMINATI TATTOO
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    activeSection === item.id ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-emerald-500/20">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">4.6/5 • 97 Reviews</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-4xl">
            <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              {heroSlides[currentSlide].title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:scale-105"
            >
              Book Your Appointment
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-500/10 transition-all"
            >
              View Our Work
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-emerald-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900/50 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900/50 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Welcome to Illuminati Tattoo Oregon City</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Located in the heart of Oregon City, Illuminati Tattoo Parlour OC is your premier destination for meaningful, custom artwork on skin. Founded by Caleb Brouk, our studio is built on the principles of creativity, safety, and radical inclusivity.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We pride ourselves on creating a welcoming, professional, and chill atmosphere. Whether you're a first-timer or a seasoned collector, our shop is a safe space for women, non-binary, and trans clients. We emphasize hygiene, client education, and proper aftercare for every service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg border border-emerald-500/20">
                  <Shield className="w-8 h-8 text-emerald-400 mb-2" />
                  <h3 className="font-bold">Sterile Environment</h3>
                  <p className="text-sm text-gray-400">Hospital-grade sanitation</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-purple-500/20">
                  <Heart className="w-8 h-8 text-purple-400 mb-2" />
                  <h3 className="font-bold">Inclusive Space</h3>
                  <p className="text-sm text-gray-400">Everyone is welcome here</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We also have a sister shop in Vancouver, WA, continuing our mission of bringing exceptional tattoo and piercing services to the Pacific Northwest.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="/images/studio-interior.jpg"
                alt="Tattoo studio interior"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-purple-500 p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold">7+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Meet Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Talented Artists</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Each artist brings their unique style and expertise to every piece. Plus, we host occasional guest artists for even more creative variety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold">{artist.name}</h3>
                  <p className="text-emerald-400 text-sm">{artist.handle}</p>
                  <p className="text-purple-400 text-sm mb-3">{artist.role}</p>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{artist.bio}</p>
                  
                  {artist.rate && (
                    <p className="text-amber-400 text-sm font-semibold mb-3">{artist.rate}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">Follow on Instagram</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-emerald-500/30 group-hover:to-purple-500/30 transition-colors">
                  <service.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Aftercare & Policies */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-8 rounded-xl border border-emerald-500/30">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Droplets className="w-6 h-6 text-emerald-400 mr-2" />
                Aftercare Information
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Follow detailed care instructions provided by your artist
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Keep your new tattoo clean and moisturized
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Avoid direct sunlight during healing
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  We provide premium aftercare products with every service
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 text-purple-400 mr-2" />
                Studio Policies
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Appointments preferred - walk-ins welcome when available
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Deposit required to secure your booking
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  48-hour cancellation notice required
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Valid ID required for all services (18+ only)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Latest Tattoos</h2>
            <p className="text-gray-400 mt-4">Follow us on Instagram @illuminatitattoooc for more</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg group ${
                  index === 1 || index === 5 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Tattoo work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <a
                    href="https://www.instagram.com/tattooilluminatioregoncity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white"
                  >
                    <Camera className="w-5 h-5" />
                    <span className="text-sm">View on Instagram</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/tattooilluminatioregoncity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Camera className="w-5 h-5" />
              <span>Follow Our Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Flash & Specials Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 via-purple-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flash & Specials</h2>
          <p className="text-xl mb-6 text-white/90">
            Check out our Instagram for current flash designs and upcoming events including Friday the 13th specials!
          </p>
          <p className="text-white/80 mb-8">
            Limited-time designs available on a first-come, first-served basis. Walk-ins welcome for flash pieces!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/tattooilluminatioregoncity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View Current Flash
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Ask About Specials
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Client Love</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-xl font-bold">4.6/5</span>
              <span className="text-gray-400">(97 Google reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Book Your Appointment</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Appointments preferred. Call or message us on Instagram to book directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-400">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Artist</label>
                      <select
                        value={formData.preferredArtist}
                        onChange={(e) => setFormData({ ...formData, preferredArtist: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                      >
                        <option value="">Any Artist</option>
                        {artists.map((artist) => (
                          <option key={artist.name} value={artist.name}>{artist.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your tattoo or piercing idea..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-purple-500 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+19712068194" className="flex items-center space-x-4 text-gray-300 hover:text-emerald-400 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>(971) 206-8194</span>
                  </a>
                  <div className="flex items-start space-x-4 text-gray-300">
                    <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>517 Main St, Suite A<br />Oregon City, OR 97045</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="font-semibold">Open Daily</p>
                      <p>12:00 PM – 8:00 PM</p>
                      <p className="text-sm text-gray-500">Monday – Sunday</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-gray-700 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.985487264651!2d-122.60947!3d45.35732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIxJzI2LjMiTiAxMjLCsDM2JzM0LjEiVw!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Illuminati Tattoo Oregon City Location"
                />
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/tattooilluminatioregoncity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-4 rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <Camera className="w-5 h-5" />
                  <span className="font-semibold">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="w-8 h-8 text-emerald-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                  ILLUMINATI
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Oregon City's premier tattoo and piercing studio. Custom art in a welcoming, professional environment.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Monday: 12:00 PM – 8:00 PM</li>
                <li>Tuesday: 12:00 PM – 8:00 PM</li>
                <li>Wednesday: 12:00 PM – 8:00 PM</li>
                <li>Thursday: 12:00 PM – 8:00 PM</li>
                <li>Friday: 12:00 PM – 8:00 PM</li>
                <li>Saturday: 12:00 PM – 8:00 PM</li>
                <li>Sunday: 12:00 PM – 8:00 PM</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(971) 206-8194</span>
                </p>
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>517 Main St, Suite A<br />Oregon City, OR 97045</span>
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/tattooilluminatioregoncity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Camera className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Illuminati Tattoo Oregon City. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Sister shop: Illuminati Tattoo Vancouver, WA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;