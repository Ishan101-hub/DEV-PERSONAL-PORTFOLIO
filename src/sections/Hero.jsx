export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background */}

        <div className="absolute inset-0">
            <img 
            src="/assets/hero.png"
            alt="Hero img"
            className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-backgrounf/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgrounfColor: "#20B2A6",
                    left: '${Math.random() * 100}%',
                    top: '${Math.random() * 100}%',
                    animation: 'slow-drift 50s'
                }}
                />
            ))}
        </div>
    </section>
}