import { useState, useEffect } from 'react';
import { 
  Hammer, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Instagram, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Zap,
  HardHat,
  Wrench,
  Construction
} from 'lucide-react';
import { motion } from 'motion/react';

const LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrIuorD3ztjpt0gFWsWtESpeBuJlCOIpWrT9OrJ4j0yqHTrkCTRpq5zBt_qDxOjbTKDkxLqfF3PBMRaayJk3hzoa45ZiG3ibord8aFck5iM5ePGjbYX98y2azCK8YmgUyz48l3JUSIkJ4a0fupKNpxxA3gMAMdaODbi6rUW6y0ToPOsOi7yVFGxU_NUJ4/s320/logo%20fmsolda.png";
const HERO_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUav0xOCnfGnrGiIGCKjUQ-vyNTDYVaFlnrVndeDNZhpZGbwCuk-zB2jxtzlqp5CsbZSA3GYU1WnR2xlW7wHHNo-qGlmy-IsFIu65OyipJFjP4iZoDm1tn621uODmtGOT6soXPvMaAemErtNJ-OCAlGkALUGyfOUhqb5PUfRTahSXOE0IpU4SfahsomNM/s16000/hero.png";
const SOBRE_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5NuiW-podPJieeAydaBggFG8uzh7g7XqcBzNaC47nZuKcuGGNdrQtRsAcDxi4Hf9OKToD6UmCfBMxMnHCQmId8CrKE3bOhDBhARjQGy-hXDJW2m_Qj_0D9sryM3nJIBP2Y_2-0TEI3SCqWvLrGvKSM6BFIs_tiMTKWKD0GqC4BSlwxQ9cjwU1xwvSV2E/w480-h640/sobre.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const iconMotionProps = {
    animate: { 
      y: [0, -5, 0],
      rotate: [0, 5, 0] 
    },
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 border-b ${
          scrolled ? 'py-3 glass shadow-lg border-white/5' : 'py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#inicio" className="relative h-10 sm:h-12">
            <img 
              src={LOGO_URL} 
              alt="FM Solda Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511957767149" 
              className="bg-brand hover:bg-brand/90 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all shadow-lg shadow-brand/20 active:scale-95 shine-effect"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 md:hidden flex flex-col p-6 space-y-4 shadow-2xl h-screen"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-bold hover:text-brand transition-colors uppercase tracking-wider py-2 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511957767149" 
              className="bg-brand text-white px-6 py-4 rounded-xl text-center font-bold uppercase tracking-wide shine-effect mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={HERO_IMAGE} 
            alt="FM Solda Working" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1.5 bg-brand/20 border border-brand/30 text-brand text-xs font-bold tracking-[0.2em] uppercase rounded-sm mb-8">
              Serralheria Premium Guararema
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              A Excelência da <span className="text-brand">Metalurgia</span> ao seu Alcance
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
              Soluções inteligentes em soldagem, estruturas metálicas e manutenções técnicas com precisão industrial e design refinado.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a 
                href="https://wa.me/5511957767149" 
                className="group w-full sm:w-auto flex items-center justify-center bg-brand hover:bg-brand/90 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shine-effect"
              >
                Falar com especialista
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#servicos" 
                className="w-full sm:w-auto flex items-center justify-center text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors py-2"
              >
                Conheça nossos serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Banner */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-8 sm:py-12 px-4 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12">
          {[
            { value: '5+', label: 'Anos de Experiência', icon: Clock },
            { value: '100+', label: 'Projetos Realizados', icon: Hammer },
            { value: '100%', label: 'Compromisso Técnico', icon: ShieldCheck },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center space-x-6 justify-center sm:justify-start"
            >
              <motion.div 
                {...iconMotionProps}
                className="p-4 bg-brand/10 border border-brand/20 rounded-xl"
              >
                <stat.icon className="text-brand" size={28} />
              </motion.div>
              <div>
                <div className="text-4xl font-display font-bold text-white leading-none mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Nossas <span className="text-brand">Soluções</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Trabalhamos com os mais altos padrões técnicos para entregar resultados duradouros e esteticamente superiores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Soldagem em Geral', 
                desc: 'Técnicas avançadas em solda MIG/MAG e Eletrodo para máxima coesão estrutural.',
                icon: Zap 
              },
              { 
                title: 'Manutenção e Reparos', 
                desc: 'Restauração técnica de portões, grades e estruturas metálicas comprometidas.',
                icon: Wrench 
              },
              { 
                title: 'Portões e Grades', 
                desc: 'Design personalizado unido à segurança para residências e empresas modernas.',
                icon: ShieldCheck 
              },
              { 
                title: 'Estruturas Metálicas', 
                desc: 'Fabricação de galpões, mezaninos e reforços estruturais com engenharia precisa.',
                icon: Construction 
              },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass p-10 rounded-3xl border border-white/5 hover:border-brand/40 transition-all duration-500 bg-gradient-to-b from-white/5 to-transparent flex flex-col h-full"
              >
                <motion.div 
                  {...iconMotionProps}
                  className="mb-8 p-5 bg-zinc-900 rounded-2xl w-fit group-hover:bg-brand/20 transition-colors"
                >
                  <service.icon className="text-brand" size={36} />
                </motion.div>
                <h3 className="font-display text-2xl font-bold mb-5 leading-tight group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="h-px bg-white/10 w-full mb-8 group-hover:bg-brand/30 transition-colors" />
                <a 
                  href="https://wa.me/5511957767149" 
                  className="text-sm font-bold text-brand uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Saiba mais <ChevronRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators - Bento Grid */}
      <section id="diferenciais" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                O Padrão <span className="text-brand">FM Solda</span>
              </h2>
              <p className="text-zinc-500 text-base sm:text-lg">
                O que nos torna a escolha estratégica para seus projetos metálicos em Guararema e região.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:auto-rows-[280px]">
            {/* Cell 1: Large Feature */}
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 glass rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-center md:justify-between group overflow-hidden relative min-h-[160px] md:min-h-0"
            >
              <div className="relative z-10 flex md:flex-col items-center md:items-start text-left">
                <motion.div 
                  {...iconMotionProps}
                  className="p-3 md:p-5 bg-brand/10 border border-brand/20 rounded-xl md:rounded-2xl w-fit mb-0 md:mb-10 mr-5 md:mr-0 group-hover:bg-brand/20 transition-colors"
                >
                  <HardHat className="text-brand" size={32} />
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-5xl font-display font-bold mb-0 md:mb-8 max-w-lg leading-tight">
                    <span className="md:hidden">Equipe Especializada</span>
                    <span className="hidden md:block">Equipe Técnica Especializada & Certificada</span>
                  </h3>
                  <p className="text-zinc-400 max-w-md text-base md:text-xl leading-relaxed hidden md:block mt-4">
                    Profissionais com vasta experiência prática e teórica, garantindo que cada solda e corte siga normas rigorosas de segurança.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-12 text-brand/5 hidden lg:block">
                <ShieldCheck size={280} strokeWidth={0.5} />
              </div>
            </motion.div>

            {/* Cell 2: Speed */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] p-8 md:p-10 flex flex-row md:flex-col items-center md:items-start border-l-4 border-l-brand min-h-[160px] md:min-h-0"
            >
              <motion.div 
                {...iconMotionProps} 
                className="p-3 md:p-0 bg-brand/10 md:bg-transparent rounded-xl md:rounded-none mr-5 md:mr-0 mb-0 md:mb-6"
              >
                <Clock className="text-brand" size={32} />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-0 md:mb-3">Pontualidade</h3>
                <p className="text-zinc-500 text-sm sm:text-base hidden md:block">Cronogramas respeitados do início ao fim da execução.</p>
              </div>
            </motion.div>

            {/* Cell 3: Quality */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-[2rem] p-8 md:p-10 flex flex-row md:flex-col items-center md:items-start min-h-[160px] md:min-h-0"
            >
              <motion.div 
                {...iconMotionProps}
                className="p-3 md:p-0 bg-brand/10 md:bg-transparent rounded-xl md:rounded-none mr-5 md:mr-0 mb-0 md:mb-6"
              >
                <ShieldCheck className="text-brand" size={32} />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-0 md:mb-3">Qualidade</h3>
                <p className="text-zinc-500 text-sm sm:text-base hidden md:block">Materiais de primeira linha e acabamento impecável.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Order: Title -> Image -> Content */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            
            {/* Title for Mobile - Hidden on Desktop */}
            <div className="lg:hidden w-full mb-8 text-center sm:text-left">
              <span className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Tradição em Guararema</span>
            </div>

            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full order-2 lg:order-1 mb-12 lg:mb-0"
            >
              <div className="aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={SOBRE_IMAGE} 
                  alt="Nosso Trabalho" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-10 rounded-[1.5rem] border border-brand/20 hidden sm:block">
                <div className="text-brand font-display text-5xl font-bold leading-none">100%</div>
                <div className="text-xs uppercase font-bold tracking-widest text-zinc-400 mt-3 whitespace-nowrap">Fabricação Própria</div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-3 lg:order-2"
            >
              {/* Span for Desktop - Hidden on Mobile */}
              <span className="hidden lg:block text-brand text-sm font-bold uppercase tracking-[0.3em] mb-6">Tradição em Guararema</span>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-[1.1] text-center lg:text-left">
                Compromisso com a <br className="hidden sm:block" />
                <span className="text-zinc-600">Inovação Metálica</span>
              </h2>
              <div className="space-y-8 text-zinc-400 leading-relaxed text-base sm:text-lg md:text-xl text-center lg:text-left">
                <p>
                  Localizada em Guararema/SP, a FM Solda nasceu da paixão pela metalurgia e do desejo de elevar o padrão de serralheria na região. Combinamos técnicas tradicionais de forja e solda com as demandas de design do século XXI.
                </p>
                <p>
                  Cada projeto que sai de nossa oficina é tratado com exclusividade. Seja uma simples manutenção ou a construção de uma complexa estrutura metálica, nosso foco é a segurança, a durabilidade e a satisfação total de nossos parceiros e clientes.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/10">
                <div className="text-center sm:text-left">
                  <div className="text-white font-bold text-lg mb-2 flex items-center justify-center sm:justify-start">
                    <MapPin className="text-brand mr-2" size={20} /> Localização
                  </div>
                  <div className="text-zinc-500 font-medium">Guararema - SP</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-white font-bold text-lg mb-2 flex items-center justify-center sm:justify-start">
                    <Construction className="text-brand mr-2" size={20} /> Setor
                  </div>
                  <div className="text-zinc-500 font-medium">Serralheria & Solda</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="font-display text-4xl font-bold mb-6 tracking-tight">A Voz de quem <span className="text-brand">Confia</span></h2>
            <p className="text-zinc-500 text-lg">Parceiros que transformaram seus espaços com nossa técnica.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                text: "Trabalho impecável na fabricação do portão da minha casa. Entrega no prazo e acabamento de altíssimo nível.", 
                author: "Ricardo Mendes", 
                role: "Proprietário Residencial" 
              },
              { 
                text: "A FM Solda resolveu um problema estrutural no nosso galpão com extrema rapidez e perícia técnica. Recomendadíssimos.", 
                author: "Empresa Logística SP", 
                role: "Cliente Corporativo" 
              },
              { 
                text: "Preço justo e atendimento muito profissional. Dá para ver que entendem profundamente de cada detalhe da soldagem.", 
                author: "Juliana Costa", 
                role: "Arquiteta" 
              }
            ].map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2rem] relative group border border-white/5 hover:border-brand/20 transition-all duration-500"
              >
                <div className="text-brand mb-8 flex space-x-1.5 transition-transform group-hover:scale-105 duration-300">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-zinc-300 italic mb-10 relative z-10 leading-relaxed text-base sm:text-lg">
                  "{testi.text}"
                </p>
                <div className="flex items-center space-x-5">
                  <div className="h-12 w-12 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand uppercase text-sm border border-brand/30">
                    {testi.author[0]}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{testi.author}</div>
                    <div className="text-xs uppercase font-bold tracking-widest text-zinc-500">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="py-16 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/20 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 glass p-12 md:p-24 rounded-[3rem] border border-brand/20 text-center shadow-3xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">
            Pronto para <br /> <span className="text-brand">Iniciar seu Projeto?</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed">
            Não importa a complexidade, temos a expertise técnica necessária para transformar sua necessidade metálica em realidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a 
              href="https://wa.me/5511957767149" 
              className="w-full sm:w-auto bg-brand hover:bg-brand/90 text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2x-brand flex items-center justify-center group shine-effect text-lg"
            >
              <Phone className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
              WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/fm_solda" 
              target="_blank" 
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center border border-white/10 text-lg"
            >
              <Instagram className="mr-3" size={24} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-20 border-t border-white/5 px-4 sm:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="max-w-sm space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <img src={LOGO_URL} alt="FM Solda" className="h-12 opacity-90 mx-auto md:mx-0" referrerPolicy="no-referrer" />
            <p className="text-zinc-500 text-base leading-relaxed">
              Excelência técnica em serralheria e estruturas metálicas em Guararema/SP. Compromisso com a segurança e o design.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/fm_solda" className="p-3 glass rounded-xl hover:text-brand transition-colors"><Instagram size={22} /></a>
              <a href="https://wa.me/5511957767149" className="p-3 glass rounded-xl hover:text-brand transition-colors"><Phone size={22} /></a>
            </div>
          </div>

          <div className="hidden md:flex md:gap-24">
            <div className="space-y-8">
              <h4 className="text-sm uppercase font-bold tracking-[0.3em] text-white">Navegação</h4>
              <nav className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="text-zinc-500 text-sm font-medium hover:text-white transition-colors">{link.name}</a>
                ))}
              </nav>
            </div>
            <div className="space-y-8">
              <h4 className="text-sm uppercase font-bold tracking-[0.3em] text-white">Especialidades</h4>
              <nav className="flex flex-col space-y-4 text-zinc-500 text-sm font-medium">
                <span>Solda Industrial</span>
                <span>Portões Estruturais</span>
                <span>Reparos Técnicos</span>
                <span>Metalurgia Design</span>
              </nav>
            </div>
          </div>

          <div className="space-y-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm uppercase font-bold tracking-[0.3em] text-white">Contato Direto</h4>
            <div className="space-y-6 text-base text-zinc-500 font-medium">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <MapPin size={22} className="text-brand shrink-0" />
                <span>Guararema - São Paulo</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <Phone size={22} className="text-brand shrink-0" />
                <span>+55 11 95776-7149</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col items-center gap-6 text-xs uppercase tracking-[0.4em] font-bold text-zinc-700">
          <div>© 2026 - FM Solda</div>
        </div>
      </footer>
    </div>
  );
}
