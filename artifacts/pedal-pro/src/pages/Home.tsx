import React, { useState } from "react";
import { Link } from "wouter";
import { ShoppingCart, Star, ChevronRight, Menu, X, Bike } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    price: 5000000,
    description: "Conquer any trail with 29\" wheels and precision hydraulic disc brakes",
    rating: 5,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=400&q=80",
  },
  {
    id: 2,
    name: "City Cruiser Elite",
    price: 3500000,
    description: "Effortless urban commuting with lightweight aluminum frame",
    rating: 5,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80",
  },
  {
    id: 3,
    name: "Road Warrior 500",
    price: 7200000,
    description: "Race-ready geometry meets everyday reliability for road enthusiasts",
    rating: 4,
    image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&q=80",
  },
  {
    id: 4,
    name: "Trail Blazer X",
    price: 4800000,
    description: "Versatile hardtail with 27.5\" wheels for mixed terrain adventures",
    rating: 5,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&q=80",
  },
  {
    id: 5,
    name: "Kids Ranger",
    price: 1200000,
    description: "Safe and fun first bike with training wheel compatibility",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400&q=80",
  },
  {
    id: 6,
    name: "Speed Demon Race",
    price: 9500000,
    description: "Carbon fiber frame, Shimano Ultegra groupset, built for victory",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&q=80",
  }
];

const categories = [
  { id: 1, name: "Mountain Bikes", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=600&q=80" },
  { id: 2, name: "Road Bikes", image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=600&q=80" },
  { id: 3, name: "Hybrid Bikes", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80" },
  { id: 4, name: "Kids Bikes", image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=600&q=80" },
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    toast({
      title: "Added to cart!",
      description: `${productName} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price).replace("Rp", "Rp ");
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* 1. Sticky Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')} data-testid="link-logo">
            <Bike className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight text-primary">Pedal Pro</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('hero')} className="text-sm font-medium hover:text-secondary transition-colors" data-testid="link-home">Home</button>
            <button onClick={() => scrollTo('products')} className="text-sm font-medium hover:text-secondary transition-colors" data-testid="link-products">Products</button>
            <button onClick={() => scrollTo('categories')} className="text-sm font-medium hover:text-secondary transition-colors" data-testid="link-categories">Categories</button>
            <button onClick={() => scrollTo('footer')} className="text-sm font-medium hover:text-secondary transition-colors" data-testid="link-contact">Contact</button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer" data-testid="button-cart">
              <ShoppingCart className="h-6 w-6 text-foreground hover:text-secondary transition-colors" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-secondary-foreground rounded-full text-xs border-2 border-white">
                  {cartCount}
                </Badge>
              )}
            </div>
            
            <button 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-md py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('hero')} className="text-left text-sm font-medium p-2 hover:bg-slate-50 rounded" data-testid="link-mobile-home">Home</button>
            <button onClick={() => scrollTo('products')} className="text-left text-sm font-medium p-2 hover:bg-slate-50 rounded" data-testid="link-mobile-products">Products</button>
            <button onClick={() => scrollTo('categories')} className="text-left text-sm font-medium p-2 hover:bg-slate-50 rounded" data-testid="link-mobile-categories">Categories</button>
            <button onClick={() => scrollTo('footer')} className="text-left text-sm font-medium p-2 hover:bg-slate-50 rounded" data-testid="link-mobile-contact">Contact</button>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section id="hero" className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" 
            alt="Mountain biker" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl"
          >
            Premium Bicycles for Every Rider
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-medium"
          >
            Discover our collection of world-class bikes built for performance and adventure.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white border-0 font-bold px-8 h-14 text-base"
              onClick={() => scrollTo('products')}
              data-testid="button-hero-shop"
            >
              Shop Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white font-bold px-8 h-14 text-base"
              onClick={() => scrollTo('categories')}
              data-testid="button-hero-learn"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our most popular models, chosen by cycling enthusiasts around the world for their unmatched quality and performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="overflow-hidden border-border bg-card h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl leading-tight text-foreground">{product.name}</h3>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < product.rating ? 'fill-secondary text-secondary' : 'fill-muted text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-xl font-bold text-primary mb-4">{formatPrice(product.price)}</p>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
                      {product.description}
                    </p>
                    
                    <Button 
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 mt-auto"
                      onClick={() => handleAddToCart(product.name)}
                      data-testid={`button-add-cart-${product.id}`}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section id="categories" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Find the perfect ride for your specific needs and terrain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.div 
                key={category.id}
                className="group relative h-[300px] lg:h-[400px] overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                onClick={() => scrollTo('products')}
                data-testid={`card-category-${category.id}`}
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">{category.name}</h3>
                  <Button 
                    variant="outline" 
                    className="bg-secondary text-white border-none hover:bg-secondary/90 hover:text-white font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-6"
                  >
                    View Collection
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer id="footer" className="bg-[#0f1e3c] text-white pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Bike className="h-8 w-8 text-secondary" />
                <span className="font-black text-2xl tracking-tight text-white">Pedal Pro</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Where serious cyclists come for gear they can trust — precise, confident, and built for the road or trail. Your journey starts here.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => scrollTo('hero')} className="hover:text-secondary transition-colors" data-testid="link-footer-home">Home</button></li>
                <li><button onClick={() => scrollTo('products')} className="hover:text-secondary transition-colors" data-testid="link-footer-products">Products</button></li>
                <li><button onClick={() => scrollTo('hero')} className="hover:text-secondary transition-colors" data-testid="link-footer-about">About Us</button></li>
                <li><button onClick={() => scrollTo('footer')} className="hover:text-secondary transition-colors" data-testid="link-footer-contact">Contact</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="font-medium">Address:</span>
                  <span>123 Cycling Boulevard<br/>Jakarta, Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:hello@pedalpro.com" className="hover:text-secondary transition-colors">hello@pedalpro.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+621234567890" className="hover:text-secondary transition-colors">+62 123 4567 890</a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-slate-300" data-testid="link-social-instagram">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-slate-300" data-testid="link-social-facebook">
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-slate-300" data-testid="link-social-x">
                  <SiX className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-slate-300" data-testid="link-social-youtube">
                  <SiYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
            <p>&copy; 2024 Pedal Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}