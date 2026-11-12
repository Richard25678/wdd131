:root {
    --temple-green: #174b3a;
    --temple-green-dark: #103629;
    --temple-gold: #f0c75e;
    --temple-paper: #f5f7f3;
    --temple-card: #ffffff;
    --temple-border: #dfe7e0;
    --temple-text: #1d2b28;
    --temple-muted: #52615b;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "DM Sans", sans-serif;
    background: var(--temple-paper);
    color: var(--temple-text);
    line-height: 1.6;
}

img {
    max-width: 100%;
    display: block;
}

.site-header {
    background: var(--temple-green);
    color: #fff;
}

#course-title {
    display: block;
    padding: 1rem 1.25rem 0.75rem;
    text-align: center;
    font-family: "DM Serif Display", serif;
    font-size: 1.7rem;
}

.site-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.3rem 1.2rem;
    background: var(--temple-green-dark);
    padding: 0.7rem 1rem;
}

.site-nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 0.35rem 0.65rem;
    border-radius: 4px;
    transition: background-color 150ms ease, color 150ms ease;
}

.site-nav a:hover,
.site-nav a:focus-visible {
    color: var(--temple-text);
    background: var(--temple-gold);
}

.temple-page {
    width: min(72rem, calc(100% - 2rem));
    margin: 2rem auto 3rem;
}

.hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(23, 75, 58, 0.98), rgba(16, 54, 41, 0.95));
    border-radius: 16px;
    color: #fff;
    box-shadow: 0 16px 32px rgba(18, 34, 28, 0.1);
}

.hero h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.1;
    font-family: "DM Serif Display", serif;
}

.hero p {
    margin: 0;
    max-width: 38rem;
    color: rgba(255, 255, 255, 0.9);
}

.hero-quote {
    padding: 1rem 1.1rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
}

.hero-quote strong {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--temple-gold);
}

.hero-quote p {
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.5;
}

.temple-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
}

.temple-card {
    overflow: hidden;
    background: var(--temple-card);
    border: 1px solid var(--temple-border);
    border-radius: 14px;
    box-shadow: 0 6px 20px rgba(18, 34, 28, 0.06);
}

.temple-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.temple-card-content {
    padding: 1.2rem 1.2rem 1.4rem;
}

.temple-card h2 {
    margin: 0 0 0.35rem;
    font-family: "DM Serif Display", serif;
    font-size: 1.7rem;
    color: var(--temple-green-dark);
}

.temple-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem 0.8rem;
    margin-bottom: 0.9rem;
    color: var(--temple-muted);
    font-size: 0.92rem;
}

.badge {
    display: inline-block;
    padding: 0.28rem 0.55rem;
    border-radius: 999px;
    background: rgba(23, 75, 58, 0.1);
    color: var(--temple-green);
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.temple-card p {
    margin: 0 0 1rem;
    color: var(--temple-text);
}

.temple-card ul {
    margin: 0;
    padding-left: 1.2rem;
    color: var(--temple-muted);
}

.temple-card li + li {
    margin-top: 0.4rem;
}

.site-footer {
    padding: 1rem;
    text-align: center;
    background: var(--temple-green-dark);
    color: #fff;
}

.site-footer p {
    margin: 0.25rem 0;
}

#lastModified {
    color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 760px) {
    .hero {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .temple-page {
        width: min(100% - 1rem, 72rem);
        margin-top: 1rem;
    }

    .hero {
        padding: 1.15rem;
    }

    .site-nav {
        gap: 0.2rem 0.55rem;
        padding-inline: 0.5rem;
    }
}
