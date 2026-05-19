"use client";
import * as React from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";

//SEO
import SEO from "@/components/SEOWrapper";
import { getPageMetadata } from "@/constants/metadata";

//Schema
import StructuredData from "@/components/StructuredData";
import { homePageSchema } from "@/constants/schemas";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import { newsEvents } from "@/constants/newsEvents";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { FileDownloadOutlined } from "@mui/icons-material";

import NewsEventsCard from "@/components/cards/NewsEventsCard";
import ResearchLineCard from "@/components/cards/ResearchLineCard";
import Text from "@/components/ui/Text";
import Image from "@/components/ui/image";
import { Mybadge, badgeVariants } from "@/components/ui/mybadge";

//Banner
import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
  BannerLogo,
} from "@/components/core/Banner";

// UI
export default function Page() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const metadata = getPageMetadata("home", currentLang);

  return (
    <>
      <SEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <StructuredData data={homePageSchema} />

      <main>
        <Link href="#section2" scroll={true} className="arrowScroll arrows">
          {" "}
        </Link>

        <Banner>
          <BannerImg></BannerImg>

          <BannerContent className="absolute ">
            <BannerLogo></BannerLogo>
            <BannerTitle className={"text-white "}>
              {t("front.title")}
            </BannerTitle>
            <BannerDescription className=" text-balance flex flex-col gap-2 font-normal">
              {t("front.description")}
            </BannerDescription>
            <Divider />
            <Link
              href="#researchlines"
              // scroll={false}
              className={ButtonVariants({
                variant: "outline",
                size: "lg",
                radius: "rounded_sm",
              })}
            >
              {t("front.action-button")}{" "}
              <ArrowForwardIcon className="mt-0.5" sx={{ fontSize: 22 }} />
            </Link>
          </BannerContent>
        </Banner>
        <section className="padding_group_description bg-background-200">
          <Divider size="xl" className="hidden md:flex" id="section2"></Divider>

          <Heading level="h3">{t("front.section1Title")}</Heading>
          <Heading level="subtitle"> {t("front.section1Description")}</Heading>

          <Divider size="md" className="hidden md:flex"></Divider>
          <Divider size="xs" className="flex md:hidden"></Divider>
          <div className="statisticsContainer">
            <div className="statisticItemContainer">
              <p className="numbersFront"> +400</p>
              <p className="unitFront">{t("front.statistics.papers")}</p>
            </div>
            <div className="statisticItemContainer">
              <p className="numbersFront">+6K</p>
              <p className="unitFront">{t("front.statistics.citations")}</p>
            </div>
            <div className="statisticItemContainer">
              <p className="numbersFront">+150</p>
              <p className="unitFront">{t("front.statistics.projects")}</p>
            </div>
            <div className="statisticItemContainer">
              <p className="numbersFront">45</p>
              <p className="unitFront">H-Index</p>
            </div>
          </div>
          <Divider size="xxl" className="hidden md:flex"></Divider>
          <div id="researchlines"></div>
        </section>

        <section
          className="standard_margin-s section-researchlines"
          id="researchlines"
        >
          <Divider size="md"></Divider>
          <Heading level="h3" className="mb-8 text-center md:text-left">
            {t("front.ResearchLines.sectionTitle")}
          </Heading>
          {/* Cards con iconos */}

          <section className="pb-12 flex flex-col justify-center justify-items-center gap-4 mx-auto md:mx-0 place-items-center sm:grid sm:grid-cols-2 sm:items-start md:grid-cols-3 md:w-fit auto-rows-min xl:grid-cols-5">
            <ResearchLineCard
              researchLine="videoconference"
              title={t("front.ResearchLines.ResearchLine4.ResearchLineTitle")}
              description={t(
                "front.ResearchLines.ResearchLine4.ResearchLineBody"
              )}
            />

            <ResearchLineCard
              researchLine="data"
              title={t("front.ResearchLines.ResearchLine1.ResearchLineTitle")}
              description={t(
                "front.ResearchLines.ResearchLine1.ResearchLineBody"
              )}
            />
            <ResearchLineCard
              researchLine="ai"
              title={t("front.ResearchLines.ResearchLine3.ResearchLineTitle")}
              description={t(
                "front.ResearchLines.ResearchLine3.ResearchLineBody"
              )}
            />
            <ResearchLineCard
              researchLine="e-learning"
              title={t("front.ResearchLines.ResearchLine2.ResearchLineTitle")}
              description={t(
                "front.ResearchLines.ResearchLine2.ResearchLineBody"
              )}
            />
            <ResearchLineCard
              researchLine="computing"
              title={t("front.ResearchLines.ResearchLine5.ResearchLineTitle")}
              description={t(
                "front.ResearchLines.ResearchLine5.ResearchLineBody"
              )}
            />
          </section>

          <Divider size="md"></Divider>
        </section>

        <section className="newsArchive padding_group_description bg-background-550">
          <Heading level="h3" className="mt-3">
            {t("newsEvents.title")}{" "}
          </Heading>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-3">
            {newsEvents.map(
              (
                {
                  className,
                  title_es,
                  title_en,
                  description_en,
                  description_es,
                  date,
                  time,
                  location,
                  category,
                  route,
                  keywords_en,
                  keywords_es,
                  img,
                  type,
                },
                key
              ) => {
                return (
                  <NewsEventsCard
                    type="compact"
                    className={className}
                    key={key}
                    date={date}
                    time={time}
                    category={category}
                    title_en={title_en}
                    title_es={title_es}
                    description_en={description_en}
                    description_es={description_es}
                    location={location}
                    route={route}
                    keywords_en={keywords_en}
                    keywords_es={keywords_es}
                    img={img}
                  ></NewsEventsCard>
                );
              }
            )}
          </div>
          <Link href="/newsEvents" className="flex justify-end">
            <Button variant="link" className="mt-4">
              {t("newsEvents.button")}{" "}
              <ArrowForwardIcon className="mt-0.5" sx={{ fontSize: 22 }} />
            </Button>
          </Link>
        </section>
      </main>
    </>
  );
}
