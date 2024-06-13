const fillTable = () => {
    const PAGES = [
        {
            name: 'Главная',
            slug: 'homepage.html'
        },
        {
            name: 'Блог',
            slug: 'blog.html'
        },
        {
            name: 'Агенство',
            slug: 'agency.html'
        },
        {
            name: 'Карьера',
            slug: 'career.html'
        },
        {
            name: 'Контекстная реклама',
            slug: 'contextual-ad.html'
        },
        {
            name: 'Диджитал стратегия',
            slug: 'digital-strategy.html'
        },
        {
            name: 'SEO продвижение',
            slug: 'seo-promotion.html'
        },
        {
            name: 'Таргетированная реклама',
            slug: 'target.html'
        },
        {
            name: 'Точприбор',
            slug: 'tochpribor.html'
        },
        {
            name: 'Статья',
            slug: 'post.html'
        },
        {
            name: 'Статья – Расширенный шаблон',
            slug: 'post-template.html'
        },
        {
            name: 'Тест – Маркетинговая диагностика',
            slug: 'marketing-diagnostics.html'
        },
        {
            name: 'Политика конфиденциальности',
            slug: 'privacy-policy.html'
        },
    ]
    const DOMAIN = window.location.href.includes('index.html') ? window.location.href.replace('index.html', '') : window.location.href;
    const projectTable = document.querySelector('.project-table');

    if (!projectTable) return;

    PAGES.forEach((page, i) => {
        const tableRow = createTableRow(page, ++i);

        projectTable.append(tableRow);
    })

    function createTableRow(page, i) {
        const tableRow = document.createElement('div');
        const pageLink = page.slug ? DOMAIN + page.slug : DOMAIN;

        tableRow.classList.add('project-table__row');
        tableRow.innerHTML = `
            <div class="project-table__cell project-table__cell--number">${i}</div>
            <div class="project-table__cell">${page.name}</div>
            <div class="project-table__cell">
                <a class="project-table__link" href="${pageLink}" target="_blank">${pageLink}</a>
            </div>
        `

        return tableRow;
    }
}

const initRunningLine = () => {
    const runningLine = document.querySelector('.running-line__body');

    if (!runningLine) return;

    const options = {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 3000,
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
        }
    }

    const runningLineSwiper = new Swiper(runningLine, options);
}

window.addEventListener('DOMContentLoaded', () => {
    initRunningLine();
    fillTable();
})