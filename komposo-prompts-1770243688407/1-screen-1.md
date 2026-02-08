Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Abode - Design Studio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    colors: {
                        gold: '#D0AF66',
                    }
                }
            }
        }
    </script>

    <style>
        body {
            background-color: #D0AF66;
            color: #ffffff;
            overflow-x: hidden;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #D0AF66;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
        }

        .image-hover-effect {
            transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .image-hover-effect:hover {
            transform: scale(1.02);
        }
        
        /* Smooth text rendering */
        .antialiased {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
</head>
<body class="antialiased min-h-screen flex flex-col relative">

    <div id="main-container" class="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col min-h-screen">

        <!-- Header -->
        <header id="header-landing" class="flex justify-between items-start w-full z-50 mb-16 md:mb-24">
            <!-- Logo -->
            <div class="logo-container opacity-0">
                <div class="relative w-14 h-14 flex items-center justify-center cursor-pointer group">
                    <!-- Scalloped Border SVG -->
                    <svg class="absolute inset-0 w-full h-full text-white transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M50 5 C55 5 58 2 62 5 C66 8 70 8 73 12 C76 16 80 18 82 22 C84 26 88 29 89 34 C90 39 93 43 92 48 C91 53 93 58 90 62 C87 66 86 71 82 74 C78 77 75 81 71 83 C67 85 63 88 58 89 C53 90 48 91 44 89 C39 87 34 86 30 83 C26 80 22 78 19 74 C16 70 13 67 11 62 C9 57 8 52 9 47 C10 42 9 37 12 33 C15 29 18 26 21 22 C24 18 28 15 32 12 C36 9 40 8 44 6 C46 5 48 5 50 5 Z" />
                    </svg>
                    <div class="relative z-10 text-center leading-none pt-1">
                        <span class="font-serif text-lg block">pa</span>
                        <span class="font-sans text-[0.55rem] tracking-widest block mt-[-2px]">CHS</span>
                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <nav class="nav-links opacity-0 pt-2">
                <ul class="flex gap-8 font-sans text-xs md:text-sm tracking-[0.2em] font-medium text-white">
                    <li>
                        <a href="#" class="relative group py-2 hover:opacity-80 transition-opacity">
                            HOME
                            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="relative group py-2 hover:opacity-80 transition-opacity">
                            WORK
                            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- Main Content -->
        <main id="main-content" class="flex-grow flex flex-col">
            
            <!-- Hero Title Section -->
            <section id="section-hero-title" class="text-center mb-16 md:mb-32 relative z-10">
                <h1 class="hero-title text-5xl md:text-7xl lg:text-8xl font-serif font-normal mb-4 opacity-0 translate-y-10">
                    project abode
                </h1>
                <p class="hero-subtitle font-sans text-[0.65rem] md:text-xs tracking-[0.3em] uppercase opacity-0 translate-y-5 font-medium">
                    Design Studio
                </p>
            </section>

            <!-- Split Layout: Text & Image -->
            <section id="section-showcase" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32">
                
                <!-- Left Text -->
                <div class="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center lg:pl-4">
                    <div class="reveal-text-container">
                        <h2 class="main-statement text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-serif font-light text-center lg:text-left opacity-0 translate-y-8 text-[#fdfdfd]">
                            A boutique design firm based in Charleston, South Carolina specializing in high end residential rehabilitation and new construction
                        </h2>
                    </div>
                </div>

                <!-- Right Image -->
                <div class="lg:col-span-7 order-1 lg:order-2 relative flex justify-center lg:justify-end">
                    <div class="image-wrapper overflow-hidden shadow-xl opacity-0 scale-95 origin-center w-full max-w-[600px]">
                        <!-- Using a high-end kitchen interior -->
                        <img 
                            src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                            alt="Luxury Kitchen Interior" 
                            class="w-full h-[500px] md:h-[650px] object-cover image-hover-effect"
                        >
                    </div>
                </div>
            </section>

            <!-- Icons Section -->
            <section id="section-icons" class="flex justify-center gap-12 md:gap-24 mb-40 opacity-0">
                <!-- Lamp Icon -->
                <div class="flex flex-col items-center gap-2 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="1.2" class="opacity-90 group-hover:opacity-100">
                        <path d="M15 15 L35 15 L32 5 L18 5 Z" /> <!-- Shade -->
                        <path d="M25 15 L25 35" /> <!-- Stem -->
                        <path d="M20 35 L30 35" /> <!-- Base -->
                        <circle cx="25" cy="40" r="2" /> <!-- Pull chain knob -->
                        <path d="M25 35 L25 38" />
                    </svg>
                </div>
                <!-- Swatches/Books Icon -->
                <div class="flex flex-col items-center gap-2 group cursor-pointer hover:-translate-y-2 transition-transform duration-300 delay-75">
                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="1.2" class="opacity-90 group-hover:opacity-100">
                        <rect x="10" y="20" width="20" height="20" transform="rotate(-10 20 30)" />
                        <rect x="15" y="15" width="20" height="20" transform="rotate(5 25 25)" />
                        <rect x="20" y="10" width="20" height="20" transform="rotate(20 30 20)" />
                    </svg>
                </div>
                <!-- Cabinet/Door Icon -->
                <div class="flex flex-col items-center gap-2 group cursor-pointer hover:-translate-y-2 transition-transform duration-300 delay-150">
                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="1.2" class="opacity-90 group-hover:opacity-100">
                        <path d="M12 5 L38 5 L38 45 L12 45 Z" /> <!-- Frame -->
                        <path d="M12 5 L25 2 L38 5" /> <!-- Top detail -->
                        <line x1="25" y1="5" x2="25" y2="45" /> <!-- Center divide -->
                        <rect x="15" y="10" width="7" height="12" /> <!-- Pane L -->
                        <rect x="28" y="10" width="7" height="12" /> <!-- Pane R -->
                        <rect x="15" y="26" width="7" height="14" /> <!-- Bottom L -->
                        <rect x="28" y="26" width="7" height="14" /> <!-- Bottom R -->
                    </svg>
                </div>
                <!-- Faucet Icon -->
                <div class="flex flex-col items-center gap-2 group cursor-pointer hover:-translate-y-2 transition-transform duration-300 delay-200">
                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="1.2" class="opacity-90 group-hover:opacity-100">
                        <path d="M35 40 L35 20 C35 12 25 12 25 20 L25 25" /> <!-- Spout -->
                        <path d="M32 40 L38 40" /> <!-- Base R -->
                        <path d="M15 30 L15 35" /> <!-- Handle Stem -->
                        <path d="M10 30 L20 30" /> <!-- Handle Bar -->
                        <path d="M12 35 L18 35 L18 40 L12 40 Z" /> <!-- Handle Base -->
                        <path d="M23 25 L27 25 L26 28 L24 28 Z" /> <!-- Nozzle -->
                        <path d="M25 28 L25 32" stroke-dasharray="2 2" /> <!-- Water -->
                    </svg>
                </div>
            </section>

            <!-- Contact Section -->
            <footer id="footer-main" class="mt-auto flex flex-col items-end text-right pb-12 opacity-0 translate-y-10">
                <h2 class="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-6 opacity-90">Contact</h2>
                
                <div class="space-y-2 font-sans text-sm md:text-base tracking-wide font-light opacity-90">
                    <a href="mailto:margaret@projectabode.net" class="block hover:opacity-100 hover:underline decoration-1 underline-offset-4 transition-all">
                        margaret@projectabode.net
                    </a>
                    <a href="tel:7068251882" class="block hover:opacity-100 transition-opacity">
                        (706) 825-1882
                    </a>
                    <div class="h-4"></div>
                    <p>Charleston, SC</p>
                    <a href="#" class="flex items-center justify-end gap-2 hover:opacity-100 transition-opacity group">
                        <span>@projectabode</span>
                        <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                </div>
            </footer>

        </main>

        <!-- Decorative Background Elements (Subtle) -->
        <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-20 mix-blend-overlay">
            <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white blur-[150px] rounded-full"></div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#b89a58] blur-[120px] rounded-full"></div>
        </div>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Header Reveal
            tl.to(".logo-container", { opacity: 1, duration: 1 })
              .to(".nav-links", { opacity: 1, duration: 1 }, "-=0.8");

            // Hero Title Reveal
            tl.to(".hero-title", { opacity: 1, y: 0, duration: 1.2 }, "-=0.5")
              .to(".hero-subtitle", { opacity: 1, y: 0, duration: 1 }, "-=0.8");

            // Image Reveal
            tl.to(".image-wrapper", { 
                opacity: 1, 
                scale: 1, 
                duration: 1.5,
                ease: "power2.out"
            }, "-=0.5");

            // Main Text Reveal
            tl.to(".main-statement", { 
                opacity: 1, 
                y: 0, 
                duration: 1.2 
            }, "-=1.0");

            // Icons Reveal
            gsap.to("#section-icons", {
                scrollTrigger: {
                    trigger: "#section-icons",
                    start: "top 90%",
                },
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1
            });

            // Footer Reveal
            gsap.to("#footer-main", {
                scrollTrigger: {
                    trigger: "#footer-main",
                    start: "top 90%",
                },
                opacity: 1,
                y: 0,
                duration: 1.2
            });
        });
    </script>
</body>
</html>