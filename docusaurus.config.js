const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
    title: 'Project Caelus',
    tagline: 'The tagline of my site',
    url: 'https://docs.projectcaelus.org',
    baseUrl: '/',
    favicon: 'img/favicon.png',
    organizationName: 'ProjectCaelus', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Project Caelus',
            logo: {
                alt: 'Project Caelus',
                src: 'img/logo.svg'
            },
            items: [
                { to: 'docs/index', label: 'Docs', position: 'left' },
                { to: 'https://projectcaelus.org/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/ProjectCaelus/docs',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ProjectCaelus'
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/projectcaelus/'
                        },
                        {
                            label: 'Instagram',
                            href: 'https://www.instagram.com/project.caelus/'
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/projectcaelus/'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Project Caelus`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex]
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};
