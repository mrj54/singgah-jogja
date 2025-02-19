"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Star, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const categoryData = {
    "active-adventures": {
        title: "Active Adventures",
        description: "Explore Jogja through exciting physical activities and adventures",
        hero: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070",
        activities: [
            {
                title: "Mount Merapi Sunrise Trek",
                duration: "6-8 hours",
                difficulty: "Moderate",
                groupSize: "2-8 people",
                price: "$45",
                image: "https://images.unsplash.com/photo-1589308454676-22c0671364c9?q=80&w=2070",
                rating: 4.8
            },
            {
                title: "Cycling Through Rice Fields",
                duration: "4 hours",
                difficulty: "Easy",
                groupSize: "4-12 people",
                price: "$30",
                image: "https://images.unsplash.com/photo-1528184039930-bd03972bd974?q=80&w=2070",
                rating: 4.9
            },
            {
                title: "Cave Tubing Adventure",
                duration: "3 hours",
                difficulty: "Moderate",
                groupSize: "2-6 people",
                price: "$35",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
                rating: 4.7
            }
        ]
    }
    // Add more categories as needed
};

export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = categoryData[params.category as keyof typeof categoryData];

    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('${category.hero}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.7)"
                    }}
                />
                <Link href="/" className="absolute top-8 left-8 z-20">
                    <Button variant="outline" className="bg-white/80 hover:bg-white">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {category.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90">
                        {category.description}
                    </p>
                </div>
            </section>

            {/* Activities Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </section>
        </main>
    );
}

function ActivityCard({
    title,
    duration,
    difficulty,
    groupSize,
    price,
    image,
    rating
}: {
    title: string;
    duration: string;
    difficulty: string;
    groupSize: string;
    price: string;
    image: string;
    rating: number;
}) {
    return (
        <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-white/70 backdrop-blur-sm">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{rating}</span>
                </div>
            </div>
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{groupSize}</span>
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {difficulty}
                    </span>
                    <span className="text-lg font-semibold text-primary">{price}</span>
                </div>
                <Button className="w-full">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    );
}