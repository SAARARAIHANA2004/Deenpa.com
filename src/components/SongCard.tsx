import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

interface SongCardProps {
  title: string;
  description: string;
  image: string;
  videoSrc?: string;
}

const SongCard = ({ title, description, image, videoSrc }: SongCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-gold)] transition-all duration-500 hover:scale-105 bg-card border-border group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-accent/90 rounded-full p-4">
            <Play className="text-accent-foreground" size={32} />
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl text-accent">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {videoSrc ? (
          <video
            controls
            className="w-full rounded-lg border-2 border-border shadow-md"
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-12 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-muted-foreground">
            <p className="text-sm">Upload your video file</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SongCard;
