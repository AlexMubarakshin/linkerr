# Linkerr 📝

Parse hrefs, image paths, scripts paths and links from site.

## Usage

```bash
node ./index.js -u INSERT_YOUR_URL
```

```bash
Usage: index [options]

Options:
  -V, --version               output the version number
  -u, --url [Site URL*]       Site URL
  -o, --output [Output path]  Output path
  -f, --fileName [File name]  File name
  -h, --help                  output usage information
```

## Output example



```bash
node ./index.js -u https://github.com
```

```json
{
    "url": "https://github.com",
    "hrefs": [
        "https://github.com#start-of-content",
        "https://github.com/",
        "https://github.com/join?source=header-home",
        "https://github.com/features",
        "https://github.com/features/code-review/",
        "https://github.com/features/project-management/",
        "https://github.com/features/integrations",
        "https://github.com/features/actions",
        "https://github.com/features/package-registry",
        "https://github.com/features#team-management",
        "https://github.com/features#social-coding",
        "https://github.com/features#documentation",
        "https://github.com/features#code-hosting",
        "https://github.com/customer-stories",
        "https://github.com/security",
        "https://github.com/enterprise",
        "https://github.com/explore",
        "https://github.com/topics",
        "https://github.com/collections",
        "https://github.com/trending",
        "https://lab.github.com/",
        "https://opensource.guide",
        "https://github.com/events",
        "https://github.community",
        "https://education.github.com",
        "https://github.com/marketplace",
        "https://github.com/pricing",
        "https://github.com/pricing#feature-comparison",
        "https://enterprise.github.com/contact",
        "https://github.com/nonprofit",
        "https://education.github.com",
        "https://github.com/login",
        "https://github.com/join?source=header-home",
        "https://github.com/open-source",
        "https://github.com/business",
        "https://help.github.com/articles/creating-a-strong-password",
        "https://help.github.com/terms",
        "https://help.github.com/privacy",
        "https://github.com/join?source=button-home",
        "https://enterprise.github.com/contact",
        "https://enterprise.github.com/trial",
        "https://live-stream.github.com",
        "https://github.com/join?plan=business&setup_organization=true&source=home",
        "https://github.com/features/code-review",
        "https://github.com/features/project-management",
        "https://github.com/features/integrations",
        "https://github.com/customer-stories/mgm-resorts",
        "https://github.com/customer-stories/nationwide",
        "https://github.com/customer-stories/sap",
        "https://github.com/customer-stories/skyscanner",
        "https://github.com/enterprise",
        "https://github.com/pricing",
        "https://enterprise.github.com/contact",
        "https://github.com/features/integrations",
        "https://github.com/marketplace",
        "https://github.com/customer-stories/freakboy3742",
        "https://github.com/customer-stories/kris-nova",
        "https://github.com/customer-stories/yyx990803",
        "https://github.com/customer-stories/jessfraz",
        "https://github.com/open-source",
        "https://github.com/personal",
        "https://github.com/business",
        "https://help.github.com/terms",
        "https://help.github.com/privacy",
        "https://github.com/",
        "https://github.com/features",
        "https://github.com/security",
        "https://github.com/enterprise",
        "https://github.com/customer-stories",
        "https://github.com/pricing",
        "https://resources.github.com",
        "https://developer.github.com",
        "http://partner.github.com/",
        "https://atom.io",
        "http://electron.atom.io/",
        "https://desktop.github.com/",
        "https://help.github.com",
        "https://github.community",
        "https://services.github.com/",
        "https://githubstatus.com/",
        "https://github.com/contact",
        "https://github.com/about",
        "https://github.blog",
        "https://github.com/about/careers",
        "https://github.com/about/press",
        "https://shop.github.com",
        "https://twitter.com/github",
        "https://www.facebook.com/GitHub",
        "https://www.youtube.com/github",
        "https://www.linkedin.com/company/github",
        "https://github.com/github",
        "https://github.com/site/terms",
        "https://github.com/site/privacy"
    ],
    "imgs": [
        "https://github.githubassets.com/images/search-key-slash.svg",
        "https://github.githubassets.com/images/modules/site/logos/airbnb-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/sap-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/ibm-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/google-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/paypal-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/bloomberg-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/spotify-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/swift-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/facebook-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/node-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/nasa-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/walmart-logo.png",
        "https://github.githubassets.com/images/modules/site/home-illo-team.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-team-code.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-team-chaos.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-team-tools.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-business.png",
        "https://github.githubassets.com/images/modules/site/integrators/slackhq.png",
        "https://github.githubassets.com/images/modules/site/integrators/zenhubio.png",
        "https://github.githubassets.com/images/modules/site/integrators/travis-ci.png",
        "https://github.githubassets.com/images/modules/site/integrators/atom.png",
        "https://github.githubassets.com/images/modules/site/integrators/circleci.png",
        "https://github.githubassets.com/images/modules/site/integrators/google.png",
        "https://github.githubassets.com/images/modules/site/integrators/codeclimate.png"
    ],
    "scripts": [
        "https://github.githubassets.com/assets/compat-bootstrap-90c0ace0.js",
        "https://github.githubassets.com/assets/frameworks-f1ce1e70.js",
        "https://github.githubassets.com/assets/github-bootstrap-7892f842.js"
    ],
    "links": [
        "https://github.githubassets.com",
        "https://avatars0.githubusercontent.com",
        "https://avatars1.githubusercontent.com",
        "https://avatars2.githubusercontent.com",
        "https://avatars3.githubusercontent.com",
        "https://github-cloud.s3.amazonaws.com",
        "https://user-images.githubusercontent.com/",
        "https://github.githubassets.com/assets/frameworks-da88be2d386821a8fa8de15789a23d23.css",
        "https://github.githubassets.com/assets/site-f26347f7a4c8de793412afd3a9311ad1.css",
        "https://github.githubassets.com/assets/github-eabf00b055e24d7c72291a479ad33e5d.css",
        "https://github.com/opensearch.xml",
        "https://github.com/fluidicon.png",
        "https://github.githubassets.com/",
        "https://github.githubassets.com/assets/site-f26347f7a4c8de793412afd3a9311ad1.css",
        "https://github.com/",
        "https://github.githubassets.com/pinned-octocat.svg",
        "https://github.githubassets.com/favicon.ico",
        "https://github.com/manifest.json"
    ]
}
```
