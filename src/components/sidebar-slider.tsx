import React, {CSSProperties, FunctionComponent, useState} from "react";
import ReactDOM from "react-dom";
import {Carousel} from "react-responsive-carousel";
import SidebarInformation from "./sidebar-information";
import {composeCreatedDate} from "../utils/utils";
import ArticleSidebarView from "./article-sidebar-view";
import {useAppSelector} from "../services/hooks";
import {TArticleProperties} from "../services/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {SliderContainerCarousel} from "./StyledComponents/sidebar-information-styles";

export const SidebarSlider: FunctionComponent<{ articles: Array<TArticleProperties> }> = (props) => {
  const baseChildren = <div>{props.articles.map((article, index) => (
    <ArticleSidebarView key={index} article={article}
                        articleDate={composeCreatedDate(article.createdAt)}/>))}</div>

  return (
    <SliderContainerCarousel
      autoFocus={false}
      showArrows={false}
      showIndicators
      showStatus={false}
      swipeable={true}
      showThumbs={false}>
      {baseChildren.props.children}
    </SliderContainerCarousel>
  );
}
