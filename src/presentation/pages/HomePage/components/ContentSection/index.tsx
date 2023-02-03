import React, { FC, ReactNode } from 'react';
import { Typo } from '../../../../ui-kit';
import DoorImg from '../../components/DoorImg';
import ContentAppear from '../../../../components/ContentAppear';
import './styles.sass';

export type ContentSectionData = {
  title: ReactNode,
  image: string,
  text: string,
}[];

interface ContentSectionProps {
  title: string;
  data: ContentSectionData;
  className?: string;
}

const ContentSection: FC<ContentSectionProps> = ({ title, data, className }) => {
  let mixedClassName = 'content-section';

  if (className) {
    mixedClassName += ` ${className}`;
  }
  
  return (
    <section className={mixedClassName}>
      <ContentAppear>
        <Typo.H1>{title}</Typo.H1>
      </ContentAppear>
      {data.map(({ title, image, text }) => (
        <article className="content-section__article" key={image}>
          <DoorImg src={image} alt="Our Products" />
          <ContentAppear>
            <Typo.H2 className="content-section__article-title">{title}</Typo.H2>
            <Typo.P>{text}</Typo.P>
          </ContentAppear>
        </article>
      ))}
    </section>
  );
};

export default ContentSection;
