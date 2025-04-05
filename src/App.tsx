import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  LightBulbIcon, 
  AcademicCapIcon, 
  ChartBarIcon, 
  ClockIcon, 
  DevicePhoneMobileIcon,
  StarIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

function App() {
  const [currentStep, setCurrentStep] = useState('quiz');
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  // New feature: Student counter
  const [studentCount, setStudentCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount(prev => (prev < 1500 ? prev + 1 : prev));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Certificado Reconhecido",
      description: "Receba um certificado profissional ao concluir o curso"
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Acesso Mobile",
      description: "Estude pelo celular quando e onde quiser"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Acesso Vitalício",
      description: "Material disponível para sempre"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Suporte Exclusivo",
      description: "Tire suas dúvidas diretamente com os instrutores"
    }
  ];

  // New feature: Success metrics
  const successMetrics = [
    { icon: <UserGroupIcon className="w-6 h-6" />, value: '1500+', label: 'Alunos' },
    { icon: <StarIcon className="w-6 h-6" />, value: '4.9', label: 'Avaliação' },
    { icon: <GlobeAltIcon className="w-6 h-6" />, value: '10+', label: 'Países' },
  ];

  const features = [
    "✓ 50+ horas de conteúdo em vídeo",
    "✓ Mentoria individual semanal",
    "✓ Grupo VIP no WhatsApp",
    "✓ Material complementar em PDF",
    "✓ Exercícios práticos",
    "✓ Comunidade exclusiva de alunos",
    "✓ Atualizações gratuitas",
    "✓ Ferramentas profissionais inclusas",
    "✓ Suporte técnico prioritário", // New feature
    "✓ Certificado digital", // New feature
    "✓ Networking exclusivo", // New feature
    "✓ Bônus surpresa" // New feature
  ];

  const questions = [
    {
      id: 'q1',
      text: 'Você quer trabalhar em casa e trabalhar sem fazer nada?',
      description: 'Imagine ter a liberdade de trabalhar do conforto da sua casa'
    },
    {
      id: 'q2',
      text: 'Você quer comprar uma moto ou carro trabalhando em casa?',
      description: 'Conquiste seus sonhos materiais com trabalho online'
    },
    {
      id: 'q3',
      text: 'Você está disposto a sair da sua cadeira e mudar de vida hoje mesmo?',
      description: 'A mudança começa com uma decisão'
    },
    {
      id: 'q4',
      text: 'Se eu disser que a partir de hoje você vai mudar sua vida, você clicaria no link abaixo?',
      description: 'Sua nova vida está a um clique de distância'
    }
  ];

  const guarantees = [
    {
      icon: "🔒",
      title: "Garantia de 7 dias",
      description: "Devolução total do investimento se não ficar satisfeito"
    },
    {
      icon: "💰",
      title: "Pagamento Seguro",
      description: "Ambiente seguro e criptografado"
    },
    {
      icon: "🎓",
      title: "Suporte Premium",
      description: "Acompanhamento personalizado"
    }
  ];

  // New feature: Bonus items
  const bonusItems = [
    { title: 'E-book Exclusivo', value: 'R$97', included: true },
    { title: 'Mentoria Individual', value: 'R$397', included: true },
    { title: 'Templates Premium', value: 'R$147', included: true },
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));

    const allAnswered = Object.values({ ...answers, [questionId]: answer }).every(a => a === 'sim');
    if (allAnswered) {
      setCurrentStep('video');
    }
  };

  const handleHotmartClick = () => {
    window.open('YOUR_HOTMART_COURSE_URL', '_blank');
  };

  const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
      hours: 23,
      minutes: 59,
      seconds: 59
    });

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          } else if (prev.hours > 0) {
            return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
          }
          return prev;
        });
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="bg-red-100 p-4 rounded-lg text-center mb-8">
        <p className="text-red-600 font-bold mb-2">Oferta especial expira em:</p>
        <div className="flex justify-center gap-4">
          <div className="bg-red-500 text-white px-4 py-2 rounded">
            {String(timeLeft.hours).padStart(2, '0')}h
          </div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">
            {String(timeLeft.minutes).padStart(2, '0')}m
          </div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">
            {String(timeLeft.seconds).padStart(2, '0')}s
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* New feature: Student counter banner */}
        <div className="bg-blue-900 text-white text-center py-2 px-4 rounded-full mb-8 max-w-md mx-auto">
          <motion.span 
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            🎉 Já são {studentCount} alunos transformando suas vidas!
          </motion.span>
        </div>

        {currentStep === 'quiz' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
          >
            <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800 leading-tight">
              Descubra Sua Oportunidade de Mudança
            </h1>
            
            {questions.map((question) => (
              <motion.div 
                key={question.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 last:mb-6"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{question.text}</h3>
                <p className="text-gray-600 mb-4">{question.description}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer(question.id, 'sim')}
                    className={`flex-1 py-3 px-6 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      answers[question.id] === 'sim'
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-green-100 text-gray-700'
                    }`}
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => handleAnswer(question.id, 'não')}
                    className={`flex-1 py-3 px-6 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      answers[question.id] === 'não'
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-red-100 text-gray-700'
                    }`}
                  >
                    Não
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentStep === 'video' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-800">
              Parabéns por Dar o Primeiro Passo!
            </h2>

            <CountdownTimer />

            {/* New feature: Success metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-blue-50 rounded-lg"
                >
                  <div className="text-blue-600 mb-2 flex justify-center">{metric.icon}</div>
                  <div className="text-2xl font-bold text-blue-800">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden shadow-lg">
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/bIVHAaF_f3Q?si=Nty6Ndu8QTFMkMEf" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              ></iframe>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* O que você vai receber */}
            <div className="bg-gray-50 p-6 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">O que você vai receber:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-700 font-medium flex items-center space-x-2"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* New feature: Bonus section */}
            <div className="bg-yellow-50 p-6 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-yellow-800 mb-6">Bônus Exclusivos:</h3>
              <div className="space-y-4">
                {bonusItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <div className="text-gray-500 line-through">{item.value}</div>
                  </motion.div>
                ))}
                <p className="text-center text-green-600 font-bold mt-4">
                  Total em bônus: R$641 GRÁTIS!
                </p>
              </div>
            </div>

            {/* Garantias */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{guarantee.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHotmartClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-full text-2xl shadow-xl transition-all duration-300 relative overflow-hidden mb-8"
            >
              <span className="relative z-10">QUERO COMEÇAR AGORA!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-75"></div>
            </motion.button>

            <div className="text-center space-y-4">
              <p className="text-2xl font-bold text-red-600">
                De <span className="line-through">R$997</span> por apenas R$497
              </p>
              <p className="text-gray-600">
                Em até 12x de R$41,42 no cartão
              </p>
              <p className="text-sm text-gray-500">
                * Oferta por tempo limitado
              </p>
            </div>

            {/* New feature: Trust badges */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Compra Segura', 'Satisfação Garantida', 'Suporte Premium', 'Acesso Imediato'].map((badge, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded text-center text-sm text-gray-600">
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;