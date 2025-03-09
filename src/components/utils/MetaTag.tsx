import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

import { matchSupportLanguage } from "@utils/i18n";

interface Props {
  title: string;
  siteName?: string;
  hideTitleSuffix?: boolean;
  description: string;
  keywords?: string;
  imgSrc?: string;
  pathname: string;
}
function MetaTag({
  title,
  siteName = "Plandy",
  hideTitleSuffix = false,
  description,
  keywords,
  imgSrc = "https://www.plandy.app/images/open_graph_logo.png",
  pathname
}: Props) {
  const { i18n } = useTranslation();

  const pageTitle = `${title}${hideTitleSuffix ? "" : " - Plandy"}`;
  const country = matchSupportLanguage(i18n.resolvedLanguage).countries[0];
  const url = `https://www.plandy.app${country === "us" ? "" : `/${country}`}${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <link rel="alternate" href={`https://www.plandy.app/${pathname}`} hrefLang="en-US" />
      <link rel="alternate" href={`https://www.plandy.app/kr${pathname}`} hrefLang="ko-KR" />
      <link rel="alternate" href={`https://www.plandy.app/jp${pathname}`} hrefLang="ja-JP" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {!!keywords?.length && <meta name="keywords" content={keywords} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgSrc} />
      <meta
        property="og:locale"
        content={matchSupportLanguage(i18n.resolvedLanguage).fullLangCode}
      />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default MetaTag;
