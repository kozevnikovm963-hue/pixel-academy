import type { Metadata } from "next";
import Link from "next/link";
import {
  documentGroups,
  licenseDocument,
  organizationDocument,
  siteBasePath,
} from "@/lib/documents";

export const metadata: Metadata = {
  title: "Документы — Pixel Academy",
  description: "Сведения об образовательной организации и документы Pixel Academy.",
};

export default function DocumentsPage() {
  return (
    <div className="documents-page">
      <header className="documents-header">
        <Link className="brand" href="/" aria-label="Pixel Academy — на главную">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-text">Pixel</span>
        </Link>
        <Link className="documents-back" href="/">
          ← Вернуться на главную
        </Link>
      </header>

      <main className="documents-main">
        <section className="documents-hero">
          <p className="eyebrow">Официальная информация</p>
          <h1>Сведения об образовательной организации</h1>
          <p>
            Основная информация, лицензия, локальные нормативные акты и другие
            обязательные документы Pixel Academy.
          </p>
        </section>

        <section className="documents-featured" id="organization">
          <article>
            <span className="documents-featured-label">Основные сведения</span>
            <h2>Об образовательной организации</h2>
            <p>Реквизиты и сведения об образовательной деятельности.</p>
            <a href={`${siteBasePath}${organizationDocument}`} target="_blank" rel="noreferrer">
              Открыть сведения ↗
            </a>
          </article>
          <article>
            <span className="documents-featured-label">Лицензия</span>
            <h2>Образовательная деятельность</h2>
            <p>Действующая выписка из реестра лицензий.</p>
            <a href={`${siteBasePath}${licenseDocument}`} target="_blank" rel="noreferrer">
              Открыть лицензию ↗
            </a>
          </article>
        </section>

        <section className="documents-section documents-page-list" id="documents-list">
          <div className="section-head">
            <p className="eyebrow">Правовая информация</p>
            <h2>Документы</h2>
            <p>
              Документы сгруппированы по назначению. Каждый PDF откроется в новой
              вкладке.
            </p>
          </div>
          <div className="document-groups">
            {documentGroups.map((group, groupIndex) => (
              <details className="document-group" key={group.title} open={groupIndex === 0}>
                <summary>
                  <span>
                    <strong>{group.title}</strong>
                    <small>{group.description}</small>
                  </span>
                  <span className="document-count">{group.documents.length}</span>
                </summary>
                <div className="document-list">
                  {group.documents.map((document) => (
                    <a href={`${siteBasePath}${document.href}`} target="_blank" rel="noreferrer" key={document.href}>
                      <strong>{document.title}</strong>
                      <span className="document-link-icon" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="programs-status documents-programs" id="educational-programs">
          <div>
            <p className="eyebrow">Образовательные программы</p>
            <h2>Раздел готовится</h2>
          </div>
          <p>Программы будут опубликованы после завершения подготовки документов.</p>
        </section>
      </main>

      <footer className="documents-page-footer">
        <span>© Pixel Academy</span>
        <Link href="/">На главную</Link>
      </footer>
    </div>
  );
}
