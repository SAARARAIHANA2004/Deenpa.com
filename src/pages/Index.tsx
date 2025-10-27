import Navbar from "@/components/Navbar";
import SongCard from "@/components/SongCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Music, Heart, Mail, Phone, MapPin } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";
import song1 from "@/assets/song-1.jpg";
import song2 from "@/assets/song-2.jpg";
import song3 from "@/assets/song-3.jpg";
import song4 from "@/assets/song-4.jpg";
import song5 from "@/assets/song-5.jpg";
import song6 from "@/assets/song-6.jpg";
import song7 from "@/assets/song-7.jpg";
import song8 from "@/assets/song-8.jpg";
import song9 from "@/assets/song-9.jpg";
import song10 from "@/assets/song-10.jpg";
import song11 from "@/assets/song-11.jpg";

const Index = () => {
  const songs = [
    {
      title: "Ya Nabi Salam Alayka",
      description: "A beautiful tribute to the Prophet Muhammad (PBUH)",
      image: song1,
    },
    {
      title: "Tala'al Badru Alayna",
      description: "Traditional nasheed welcoming the Prophet to Medina",
      image: song2,
    },
    {
      title: "Qur'an Recitation",
      description: "Peaceful recitation of selected verses",
      image: song3,
    },
    {
      title: "Ramadan Nights",
      description: "Celebrating the blessed month of Ramadan",
      image: song4,
    },
    {
      title: "Journey to Makkah",
      description: "Spiritual journey to the holy land",
      image: song5,
    },
    {
      title: "Stars and Moon",
      description: "Reflecting on Allah's beautiful creation",
      image: song6,
    },
    {
      title: "Bismillah",
      description: "Beginning everything with Allah's name",
      image: song7,
    },
    {
      title: "In the Mosque",
      description: "Finding peace in the house of Allah",
      image: song8,
    },
    {
      title: "Divine Pattern",
      description: "The perfect harmony in Islamic teachings",
      image: song9,
    },
    {
      title: "Hands in Dua",
      description: "The power of sincere supplication",
      image: song10,
    },
    {
      title: "Dome of Light",
      description: "Architectural beauty praising the Creator",
      image: song11,
    },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 pattern-islamic"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 46, 38, 0.85), rgba(22, 46, 38, 0.85)), url(${heroPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Music className="mx-auto mb-6 text-accent" size={80} />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold leading-tight">
              Islamic Songs
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
              by Mahmood Marzook
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 leading-relaxed">
              Discover a beautiful collection of nasheeds and Islamic songs that
              touch the soul and bring peace to the heart
            </p>
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("songs")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6 rounded-full shadow-[var(--shadow-gold)] hover:shadow-xl transition-all duration-300"
            >
              Explore Songs
            </Button>
          </div>
        </div>
      </section>

      {/* Songs Section */}
      <section id="songs" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Our Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each nasheed is crafted with devotion and love for Allah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {songs.map((song, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SongCard {...song} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50 pattern-islamic">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Heart className="mx-auto mb-6 text-accent" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-8">
              About Our Mission
            </h2>
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                Assalamu Alaikum! Welcome to Islamic Songs by Mahmood Marzook.
                Our mission is to spread the beautiful message of Islam through
                melodious nasheeds and spiritual songs.
              </p>
              <p>
                Each song in our collection is carefully selected and performed
                with deep reverence and love for Allah (SWT) and His Messenger
                (PBUH). We believe that music with meaningful Islamic content can
                touch hearts and strengthen faith.
              </p>
              <p>
                Our nasheeds celebrate the beauty of Islamic teachings, the glory
                of the holy places, and the spiritual journey of every Muslim. May
                these songs bring peace to your heart and draw you closer to
                Allah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <Mail className="mx-auto mb-6 text-accent" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Have questions or want to connect? Reach out to us!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-accent mb-6">
                  Contact Information
                </h3>
                <div className="flex items-start space-x-4">
                  <Phone className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      mahmood@islamicsongs.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Serving the global Muslim community
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border shadow-[var(--shadow-card)]">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      rows={4}
                      className="bg-background border-border"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-[var(--shadow-gold)] transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/80 text-lg">
            © {new Date().getFullYear()} Islamic Songs by Mahmood Marzook. All
            rights reserved.
          </p>
          <p className="text-muted-foreground mt-2">
            May Allah bless you and your family
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
