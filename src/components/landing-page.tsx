"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { courseGroups, courses, reviews, teachers } from "@/lib/site-data";
import { licenseDocument, siteBasePath } from "@/lib/documents";

const navItems = [
  { href: "#courses", label: "Курсы" },
  { href: "#events", label: "Мероприятия" },
  { href: "#partners", label: "Партнерская программа" },
  { href: "#about", label: "О нас" },
  { href: "#contacts", label: "Контакты" },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " footer-brand" : ""}`} href="#top" aria-label="Pixel">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="brand-text">Pixel</span>
    </a>
  );
}

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formResult, setFormResult] = useState("");
  const [selectedCourseIndex, setSelectedCourseIndex] = useState<number | null>(null);
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const courseDetailsRef = useRef<HTMLElement>(null);
  const selectedCourse =
    selectedCourseIndex === null ? null : courseGroups[selectedCourseIndex];

  useEffect(() => {
    if (selectedCourseIndex === null) return;

    const frame = requestAnimationFrame(() => {
      courseDetailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [selectedCourseIndex]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormResult("Заявка сохранена в демо-режиме. Позже подключим отправку.");
    event.currentTarget.reset();
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className={isMenuOpen ? "site-shell menu-open" : "site-shell"}>
      <div className="promo">
        <span>Пробное занятие и консультация по направлениям Pixel</span>
        <a href="#lead">Записаться</a>
      </div>

      <header className="header">
        <Brand />

        <button
          className="menu-button"
          type="button"
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav" aria-label="Главное меню">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="contact-link" href="tel:+79158936088">
            +7 915 893-60-88
          </a>
          <a className="login-link" href="#lead">
            Войти
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Центр креативного развития</p>
            <h1>Учим детей рисовать свое будущее</h1>
            <p>
              Онлайн-занятия по рисунку, живописи, дизайну и digital-направлениям для
              детей и подростков от 3 лет.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#lead">
                Записаться
              </a>
              <a className="button secondary" href="#courses">
                Смотреть курсы
              </a>
            </div>
            <ul className="hero-points">
              <li>Занятия с преподавателем</li>
              <li>Творческие задания после уроков</li>
              <li>Обратная связь по работам</li>
            </ul>
          </div>

          <form className="lead-card" id="lead" onSubmit={handleSubmit}>
            <p className="form-kicker">Пара шагов до начала занятий</p>
            <h2>Оставьте заявку</h2>
            <p>Мы свяжемся с вами и подберем подходящее направление.</p>
            <label>
              <span>Имя</span>
              <input name="name" type="text" placeholder="Как к вам обращаться" required />
            </label>
            <label>
              <span>Телефон</span>
              <input name="phone" type="tel" placeholder="+7 915 893-60-88" required />
            </label>
            <button className="button submit" type="submit">
              Записаться
            </button>
            <small>
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
            </small>
            <p className="form-result" role="status" aria-live="polite">
              {formResult}
            </p>
          </form>
        </section>

        <section className="section directions" id="courses">
          <div className="section-head">
            <p className="eyebrow">Направления</p>
            <h2>Курсы Pixel</h2>
            <p>
              Четыре направления для разных возрастов: от первых творческих шагов до
              digital art и продвинутого скетчинга.
            </p>
          </div>
          <div className="course-grid">
            {courses.map((course, index) => (
              <button
                className={`course-card course-trigger accent-${course.accent}${
                  selectedCourseIndex === index ? " is-active" : ""
                }`}
                type="button"
                key={course.title}
                aria-pressed={selectedCourseIndex === index}
                aria-controls="course-details"
                onClick={() =>
                  setSelectedCourseIndex((currentIndex) => {
                    setExpandedProgram(null);
                    return currentIndex === index ? null : index;
                  })
                }
              >
                <span className="age">{course.age}</span>
                <Image
                  className="course-illustration"
                  src={`${siteBasePath}${course.image}`}
                  alt=""
                  width={180}
                  height={180}
                  aria-hidden="true"
                />
                <span className="course-card-title">{course.title}</span>
                <strong>{course.subtitle}</strong>
                <ul className="course-highlights">
                  {course.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <span className="course-open">
                  {selectedCourseIndex === index ? "Открыто" : "Смотреть программы"}
                </span>
              </button>
            ))}
          </div>

          {selectedCourse ? (
            <section
              className={`course-group group-${selectedCourse.accent}`}
              id="course-details"
              ref={courseDetailsRef}
              aria-live="polite"
            >
              <div className="course-group-head">
                <div>
                  <span className="age">{selectedCourse.age}</span>
                  <h3>{selectedCourse.title}</h3>
                </div>
                <div className="course-group-summary">
                  <p>{selectedCourse.subtitle}</p>
                  <span className="program-count">
                    {selectedCourse.programs.length} программ внутри направления
                  </span>
                </div>
              </div>
              <div className="program-grid">
                {selectedCourse.programs.map((program, index) => {
                  const programKey = `${selectedCourse.title}-${program.title}`;
                  const isExpanded = expandedProgram === programKey;

                  return (
                    <article
                      className={`program-card${isExpanded ? " is-expanded" : ""}`}
                      key={program.title}
                    >
                      <div className="program-meta">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{program.duration}</strong>
                      </div>
                      <h4>{program.title}</h4>
                      <p>{program.description}</p>
                      <div className="program-actions">
                        <button
                          className="program-more"
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setExpandedProgram(isExpanded ? null : programKey)
                          }
                        >
                          {isExpanded ? "Свернуть" : "Подробнее"}
                        </button>
                        <a className="program-link" href="#lead">
                          Записаться
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}
        </section>

        <section className="section split" id="about">
          <div>
            <p className="eyebrow">Обучение</p>
            <h2>Уроки доступны в удобное время</h2>
            <p>
              В первой версии оставляем базовый блок о формате занятий. Позже сюда
              добавим настоящие скриншоты платформы, примеры работ учеников и подробности
              по каждому курсу.
            </p>
            <div className="feature-list">
              <div>
                <strong>Материалы</strong>
                <span>в одном месте</span>
              </div>
              <div>
                <strong>Преподаватель</strong>
                <span>дает обратную связь</span>
              </div>
              <div>
                <strong>Задания</strong>
                <span>после каждого урока</span>
              </div>
              <div>
                <strong>Расписание</strong>
                <span>подбирается индивидуально</span>
              </div>
            </div>
          </div>
          <div className="platform-visual" aria-label="Временный макет платформы">
            <div className="browser-bar" />
            <div className="lesson-window">
              <div className="canvas-preview" />
              <div className="video-preview" />
              <div className="note note-one">Учебные материалы</div>
              <div className="note note-two">Видеочат с педагогом</div>
              <div className="note note-three">Интерактивная доска</div>
            </div>
          </div>
        </section>

        <section className="section teachers">
          <div className="section-head">
            <p className="eyebrow">Команда</p>
            <h2>Преподаватели, которые помогают влюбиться в творчество</h2>
          </div>
          <div className="teacher-grid">
            {teachers.map((teacher) => (
              <article className="teacher-card" key={teacher.name}>
                <div className="teacher-photo">
                  <Image
                    className="avatar"
                    src={`${siteBasePath}${teacher.image}`}
                    alt={teacher.name}
                    width={640}
                    height={640}
                    sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 25vw"
                  />
                  <p className={`teacher-subject subject-${teacher.accent}`}>
                    {teacher.subject}
                  </p>
                </div>
                <div className="teacher-copy">
                  <h3>{teacher.name}</h3>
                  <p className="teacher-quote">&ldquo;{teacher.quote}&rdquo;</p>
                  <a className="teacher-button" href="#lead">
                    Записаться
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reviews">
          <div className="section-head">
            <p className="eyebrow">Отзывы</p>
            <h2>Нас любят ученики и их родители</h2>
            <p>
              Родители отмечают спокойную атмосферу, удобный формат и понятную обратную
              связь от преподавателей.
            </p>
          </div>
          <div className="review-row">
            {reviews.map((review) => (
              <blockquote key={review.author}>
                <p>&ldquo;{review.text}&rdquo;</p>
                <cite>{review.author}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section info-grid">
          <article id="events">
            <h2>Мероприятия</h2>
            <p>Здесь появятся анонсы мастер-классов, открытых уроков и творческих встреч.</p>
          </article>
          <article id="partners">
            <h2>Партнерская программа</h2>
            <p>Раздел для условий сотрудничества, реферальной программы и партнерских материалов.</p>
          </article>
          <article id="organization-information">
            <h2>Сведения об образовательной организации</h2>
            <p>Основная информация, реквизиты и сведения об образовательной деятельности.</p>
            <a className="info-document-link" href={`${siteBasePath}/documents#organization`}>
              Перейти в раздел
            </a>
          </article>
        </section>
      </main>

      <footer className="footer" id="contacts">
        <div>
          <Brand footer />
          <p>Онлайн-курсы творчества для детей и подростков.</p>
        </div>
        <div>
          <h3>Контакты</h3>
          <a href="tel:+79158936088">+7 915 893-60-88</a>
          <a href="mailto:Pixelacademy@mail.ru">Pixelacademy@mail.ru</a>
          <a href="https://vk.ru/club239075406">VK группа</a>
        </div>
        <div>
          <h3>Документы</h3>
          <a href={`${siteBasePath}/documents#documents-list`}>Документы</a>
          <a href={`${siteBasePath}/documents#organization`}>Сведения об организации</a>
          <a href={`${siteBasePath}${licenseDocument}`} target="_blank" rel="noreferrer">Лицензия</a>
          <a href={`${siteBasePath}/documents#educational-programs`}>Образовательные программы</a>
        </div>
      </footer>
    </div>
  );
}
