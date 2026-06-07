import {Button} from '@/components/Button';
import { ArrowRight, Download,} from 'lucide-react';
// import { Github, Linkedin, Mail} from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const skills = [
    "React",
    "Python",
    "Java",
    "Node.js",
    "HTML",
    "JavaScript",
    "TypeScript",
    "FastAPI",
    "Firebase",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "Vercel",
    "AWS",
    "Tailwind CSS",
    "Figma",
    "Git",
    "GitHub Actions"
];

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
                key={i}
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
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
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
                            Crafting <span className="text-primary glow-text">digital</span> <br/> solutions with <br/><span className="font-serif italic font-normal text-white">code and creativity</span>
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
                    {/* Social Links
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground"> Follow: </span>
                        {[
                            { icon: Github, href: "#"},  
                            { icon: Linkedin, href: "#"},
                            { icon: Mail, href: "#"}
                        ].map((social, idx) => (
                            <a 
                            key={idx} 
                            href={social.href} 
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div> */}
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div> 
                            {/* className="relative glass rounded-3xl p-2 glow-border" */}
                            <img src="src/assets/profile.png" alt="Ishan Udawatte" className="w-full aspect-[4/5] object-cover rounded-4xl"/>
                        </div>
                    </div>
                </div>
            </div>
                {/*Skills Section  */}
                <div className="mt-20 animte-fade-in-delay-600 ">
                    <p className="text-sm text-muted-foreground md-6 text-center">
                        Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-forground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    </section>
}