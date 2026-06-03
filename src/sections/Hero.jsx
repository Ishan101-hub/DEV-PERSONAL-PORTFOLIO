import {Button} from '@/components/Button';
import { ArrowRight, Download } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background */}

        <div className="absolute inset-0">
            <img 
            src="/src/assets/hero.jpeg"
            alt="Hero img"
            className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#20b2a6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${
                        15 + Math.random() * 20
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="cintainer mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineer • Backend Developer
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span> <br/> solutions with <br/><span className="font-serif italic font-normal text white">code and creativity</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Ishan Udawatte - a software engineering undergraduate specializing React, Next.js, and TypeScript. I have a passion for crafting seamless user experiences and building robust web applications. With a strong foundation in software development, I thrive on turning complex problems into elegant solutions. Let's connect and create something amazing together!
                        </p>
                    </div>
                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton />
                    </div>
                    {/* Social Links */}
                    <div className="fles items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground"> Follow: </span>
                        {[{icon: Github, href: "#"},
                        {icon: Linkedin, href: "#"},
                        {icon: Mail, href: "#"}
                        ].map((social, idx) => (
                            <a jey={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary trasition-all duration-300"><social.icon />
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
            </div>    
        </div>
    </section>
}