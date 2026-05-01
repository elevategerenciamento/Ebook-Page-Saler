import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight,
  HelpCircle,
  Clock,
  Zap,
  Lock,
  Download
} from 'lucide-react';

function App() {


  const [showSticky, setShowSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* HEADER FIXO */}
      <header className="header">
        <div className="container">
          <div className="logo">
            DINHEIRO <span>SEM CONTROLE</span>
          </div>
          <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn header-cta">
            Aproveitar Oferta
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Sua conta bancária não deveria ser um <span className="text-teal">motivo de estresse.</span>
              </h1>
              <p className="hero-subtitle">
                Um guia prático para organizar sua vida financeira e fazer seu dinheiro evoluir. Pare de trabalhar apenas para pagar boletos.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
                <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn btn-large btn-pulse">
                  Quero retomar o controle agora <ArrowRight size={20} />
                </a>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                  <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  Oferta por tempo limitado: 60% OFF
                </p>
              </div>
            </div>
            <div className="hero-image-wrapper" style={{ flexDirection: 'column', gap: '32px' }}>
              <div className="book-mockup">
                <img 
                  src="/capa/ebook_cover.png" 
                  alt="Dinheiro Sem Controle Não Cresce" 
                  className="hero-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="book-placeholder"><span>Dinheiro Sem Controle Não Cresce</span></div>';
                  }}
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                />
              </div>
              <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn btn-secondary btn-pulse" style={{ width: '100%', maxWidth: '340px' }}>
                Garantir meu Ebook Agora <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE IDENTIFICAÇÃO */}
      <section className="section ident-section">
        <div className="container">
          <h2 className="section-title">Você se sente preso nesse ciclo?</h2>
          <div className="ident-list mt-8">
            <div className="ident-item">
              <XCircle className="ident-icon" size={24} />
              <p>O salário entra em um dia e, em menos de uma semana, você já não sabe para onde ele foi.</p>
            </div>
            <div className="ident-item">
              <XCircle className="ident-icon" size={24} />
              <p>O medo de abrir o aplicativo do banco e ver o saldo negativo é uma constante na sua vida.</p>
            </div>
            <div className="ident-item">
              <XCircle className="ident-icon" size={24} />
              <p>Você trabalha duro, faz horas extras, mas a sensação é de que está apenas "enxugando gelo".</p>
            </div>
            <div className="ident-item">
              <XCircle className="ident-icon" size={24} />
              <p>Qualquer imprevisto — um pneu furado ou uma consulta médica — vira uma crise financeira.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn btn-secondary">
              Sim, quero sair desse ciclo <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. QUEBRA DE CRENÇA */}
      <section className="section belief-section">
        <div className="container">
          <div className="belief-box">
            <p className="belief-statement">"Eu só preciso ganhar mais para resolver meus problemas..."</p>
            <p className="section-subtitle mb-0" style={{ marginBottom: 0, color: 'white' }}>
              Essa é a maior mentira que já te contaram. <br /><br />
              Se você não sabe gerenciar R$ 2.000, terá problemas ainda maiores quando ganhar R$ 10.000. 
              <strong> A organização é a base do crescimento.</strong> Sem controle, o dinheiro sempre encontrará um caminho para desaparecer.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS REAIS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Por que este guia é diferente?</h2>
          <p className="section-subtitle">Focamos no que realmente importa: resultados práticos sem complicações.</p>
          <div className="grid grid-cols-3 mt-8">
            <div className="card">
              <div className="benefit-icon">
                <Zap size={28} />
              </div>
              <h3 className="benefit-title">Método Simplificado</h3>
              <p className="benefit-desc">Esqueça planilhas complexas. Você aprenderá um sistema de controle que leva apenas 5 minutos por dia.</p>
            </div>
            <div className="card">
              <div className="benefit-icon">
                <TrendingUp size={28} />
              </div>
              <h3 className="benefit-title">Fim da Ansiedade</h3>
              <p className="benefit-desc">Saiba exatamente o quanto pode gastar em cada área da vida, sem culpa e sem surpresas no cartão.</p>
            </div>
            <div className="card">
              <div className="benefit-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="benefit-title">Paz Mental</h3>
              <p className="benefit-desc">Crie sua reserva de emergência e prepare o terreno para começar a investir com segurança.</p>
            </div>
          </div>
        </div>
      </section>



      {/* 4.5. SUMÁRIO DO EBOOK */}
      <section className="section summary-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">O que você vai dominar</h2>
          <p className="section-subtitle">
            Um mapa completo e estruturado para você sair do caos financeiro.
          </p>
          
          <div className="summary-grid mt-8">
            <div className="card summary-card">
              <div className="summary-header">
                <span className="summary-part">Módulo 1</span>
                <h3 className="summary-title">Diagnóstico de Choque</h3>
              </div>
              <ul className="summary-chapters">
                <li><ChevronRight size={16} /> Entendendo para onde seu dinheiro foge</li>
                <li><ChevronRight size={16} /> O perigo invisível do cartão de crédito</li>
                <li><ChevronRight size={16} /> Como quebrar o ciclo do "pagar para trabalhar"</li>
              </ul>
            </div>

            <div className="card summary-card">
              <div className="summary-header">
                <span className="summary-part">Módulo 2</span>
                <h3 className="summary-title">O Sistema de Controle</h3>
              </div>
              <ul className="summary-chapters">
                <li><ChevronRight size={16} /> A regra do teto de gastos inteligente</li>
                <li><ChevronRight size={16} /> Mapeamento sem sofrimento</li>
                <li><ChevronRight size={16} /> Organização mensal em 15 minutos</li>
              </ul>
            </div>

            <div className="card summary-card">
              <div className="summary-header">
                <span className="summary-part">Módulo 3</span>
                <h3 className="summary-title">Liberdade Financeira</h3>
              </div>
              <ul className="summary-chapters">
                <li><ChevronRight size={16} /> Criando sua reserva de emergência do zero</li>
                <li><ChevronRight size={16} /> O controle emocional nas compras</li>
                <li><ChevronRight size={16} /> Preparando o terreno para investir</li>
              </ul>
            </div>

            <div className="card summary-card">
              <div className="summary-header">
                <span className="summary-part">Extra Especial</span>
                <h3 className="summary-title">Plano de Ação 30 Dias</h3>
              </div>
              <ul className="summary-chapters">
                <li><ChevronRight size={16} /> Checklist semanal de atividades</li>
                <li><ChevronRight size={16} /> Tarefas práticas dia após dia</li>
                <li><ChevronRight size={16} /> Resultados visíveis já no primeiro mês</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn btn-outline">
              Quero este conteúdo agora <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 8. PLANO DE 30 DIAS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Resultados em 30 Dias</h2>
          <p className="section-subtitle">Um passo a passo cronológico para sua transformação.</p>
          
          <div className="plan-timeline mt-8">
            <div className="plan-item">
              <div className="plan-dot"></div>
              <div className="plan-content">
                <h3>Semana 1</h3>
                <h4>O Fim do Sangramento</h4>
                <p>Ações imediatas para estancar as perdas de dinheiro que você nem percebe que tem.</p>
              </div>
            </div>
            <div className="plan-item">
              <div className="plan-dot"></div>
              <div className="plan-content">
                <h3>Semana 2</h3>
                <h4>A Nova Estrutura</h4>
                <p>Implementação do sistema de teto de gastos e organização das contas fixas e variáveis.</p>
              </div>
            </div>
            <div className="plan-item">
              <div className="plan-dot"></div>
              <div className="plan-content">
                <h3>Semana 3 e 4</h3>
                <h4>Manutenção e Reserva</h4>
                <p>Criação do hábito de controle e os primeiros passos para sua reserva de segurança.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn btn-glass">
              Garantir meu acesso ao Plano 30 Dias <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="section guarantee-section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-icon-large">
              <ShieldCheck size={80} />
            </div>
            <div className="guarantee-content-large">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>Sua satisfação é nossa prioridade absoluta</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Estamos tão confiantes na qualidade do nosso método que oferecemos uma <strong>Garantia Incondicional de 7 dias</strong>. 
                Se por qualquer motivo você achar que o conteúdo não é para você, basta nos enviar um e-mail e devolveremos 100% do seu investimento. 
                Sem perguntas, sem burocracia e sem ressentimentos.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-color)', fontWeight: '700' }}>
                <CheckCircle2 size={20} />
                <span>Risco Zero para você</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Dúvidas Frequentes</h2>
          <div className="faq-container mt-12">
            <div className="faq-item">
              <div className="faq-question">
                <HelpCircle size={20} />
                Como recebo o material?
              </div>
              <p className="faq-answer">
                O acesso é imediato. Assim que o pagamento for confirmado, você receberá o link para download em seu e-mail.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <HelpCircle size={20} />
                Preciso entender de finanças ou matemática?
              </div>
              <p className="faq-answer">
                Absolutamente não. O guia foi escrito com linguagem simples para pessoas comuns. Se você sabe somar e subtrair, consegue aplicar tudo.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <HelpCircle size={20} />
                E se eu não gostar do conteúdo?
              </div>
              <p className="faq-answer">
                Você tem 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <HelpCircle size={20} />
                O pagamento é seguro?
              </div>
              <p className="faq-answer">
                Sim, utilizamos a maior plataforma de pagamentos digitais do Brasil, garantindo total segurança para seus dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12. OFERTA E CTA FINAL */}
      <section id="oferta" className="section offer-section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 className="section-title">Comece sua transformação hoje</h2>
          <p className="section-subtitle">Assuma o comando da sua vida financeira por um valor simbólico.</p>
          
          <div className="price-card mt-8">
            <div className="price-promo-tag">60% DE DESCONTO HOJE</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Ebook Completo</h3>
            <p className="text-secondary">Guia Dinheiro Sem Controle Não Cresce</p>
            
            <div className="price-container" style={{ margin: '24px 0' }}>
              <span className="price-old">De R$ 69,90</span>
              <div className="price-value" style={{ margin: '0' }}>
                <span className="price-currency">Por R$</span>
                <span>27</span>
                <span style={{ fontSize: '1rem', marginTop: '14px', color: 'var(--text-secondary)' }}>,90</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: '600', marginTop: '8px' }}>
                Pagamento único. Sem mensalidades.
              </p>
            </div>
            
            <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn btn-large btn-pulse" style={{ marginTop: '12px' }}>
              GARANTIR MINHA VAGA AGORA
            </a>
            
            <div className="guarantee">
              <ShieldCheck size={18} color="var(--primary-color)" />
              <span>Garantia de Satisfação de 7 dias</span>
            </div>

            <div className="trust-badges">
              <div className="trust-badge">
                <Lock size={16} />
                <span>Seguro</span>
              </div>
              <div className="trust-badge">
                <Zap size={16} />
                <span>Entrega Imediata</span>
              </div>
              <div className="trust-badge">
                <CheckCircle2 size={16} />
                <span>Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY CTA MOBILE */}
      <div className={`sticky-cta-mobile ${showSticky ? 'visible' : ''}`}>
        <a href="https://sun.eduzz.com/797ZD7PA0E" className="btn" style={{ width: '100%', boxShadow: '0 4px 20px rgba(0, 208, 158, 0.4)' }}>
          Aproveitar 60% de Desconto
        </a>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="logo" style={{ marginBottom: '24px' }}>
            DINHEIRO <span>SEM CONTROLE</span>
          </div>
          <p>© {new Date().getFullYear()} Dinheiro Sem Controle Não Cresce. Todos os direitos reservados.</p>
          <p style={{ marginTop: '16px', opacity: 0.6, maxWidth: '700px', margin: '16px auto 0' }}>
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. Este produto não garante resultados financeiros automáticos. A aplicação correta do método depende do comprometimento individual.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px', opacity: 0.5 }}>
            <a href="#">Termos de Uso</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
