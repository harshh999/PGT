import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Share2, ArrowUpRight, Check } from 'lucide-react';
import { articles } from '../data/articles';

interface ArticleDetailPageProps {
  slug: string;
  onBack: () => void;
  onOpenConsultation: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onBack,
  onOpenConsultation,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const article = articles.find((a) => a.slug === slug) || articles[0];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="article-detail-page theme-cream" style={{ paddingTop: 'clamp(6rem, 12vw, 9rem)' }}>
      {/* Fixed Reading Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          backgroundColor: 'var(--color-warm-brown)',
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: 'width 0.1s linear',
        }}
        aria-hidden="true"
      />

      <div className="container">
        {/* Back Link & Share Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <button
            onClick={onBack}
            className="editorial-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
          >
            <ArrowLeft size={16} />
            <span>Return to Journal</span>
          </button>

          <button
            onClick={handleShare}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              color: 'var(--color-ink-secondary)',
              border: '1px solid var(--border-medium-light)',
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-pill)',
            }}
          >
            {copied ? <Check size={14} color="var(--color-warm-brown)" /> : <Share2 size={14} />}
            <span>{copied ? 'Link copied' : 'Share essay'}</span>
          </button>
        </div>

        {/* Article Editorial Header */}
        <header style={{ maxWidth: '920px', margin: '0 auto clamp(3rem, 5vw, 4.5rem)' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--color-warm-brown)',
                fontWeight: 600,
              }}
            >
              {article.category}
            </span>
          </div>

          <h1
            className="heading-hero"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              lineHeight: 1.08,
              marginBottom: '2rem',
            }}
          >
            {article.title}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle-light)',
            }}
          >
            {/* Author Attribution */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={article.author.avatar}
                alt={article.author.name}
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-ink-primary)' }}>
                  {article.author.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-ink-muted)' }}>
                  {article.author.role}
                </div>
              </div>
            </div>

            {/* Date & Reading Time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
              <span>{article.publishedDate}</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} />
                {article.readingTime}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto clamp(3rem, 6vw, 5rem)',
            aspectRatio: '21 / 10',
            overflow: 'hidden',
            borderRadius: 'var(--radius-xs)',
          }}
        >
          <img
            src={article.heroImage}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Reading Body Column */}
        <div
          className="container-reading"
          style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            paddingBottom: 'clamp(4rem, 8vw, 8rem)',
          }}
        >
          {article.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={idx}
                  className="heading-2"
                  style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'subheading') {
              return (
                <h3
                  key={idx}
                  className="heading-3"
                  style={{ marginTop: '1rem', marginBottom: '0.25rem' }}
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === 'quote') {
              return (
                <div
                  key={idx}
                  className="pull-quote"
                  style={{ margin: '1.5rem 0' }}
                >
                  "{block.text}"
                </div>
              );
            }
            return (
              <p
                key={idx}
                className="text-body"
                style={{
                  fontSize: '1.12rem',
                  lineHeight: 1.85,
                  color: 'var(--color-ink-primary)',
                }}
              >
                {block.text}
              </p>
            );
          })}

          {/* Author Callout Box */}
          <div
            style={{
              marginTop: '3.5rem',
              padding: '2.5rem',
              backgroundColor: 'var(--color-cream-light)',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-subtle-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
              ABOUT THE AUTHOR
            </span>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <img
                src={article.author.avatar}
                alt={article.author.name}
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '0.25rem' }}>
                  {article.author.name}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                  Nidhi Wadhwa is a London-based psychotherapist focusing on attachment, couples de-escalation, and high-stakes relational systems.
                </p>
              </div>
            </div>
            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-ink-secondary)' }}>
                Interested in exploring these themes in personal or couples therapy?
              </span>
              <button onClick={onOpenConsultation} className="editorial-link" style={{ fontWeight: 600, color: 'var(--color-burgundy)' }}>
                <span>Begin a conversation</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
