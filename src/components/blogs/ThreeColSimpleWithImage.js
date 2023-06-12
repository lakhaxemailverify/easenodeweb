import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);

const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg text-center`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://ik.imagekit.io/8x8/v3/assets/blte621f0a2bd0e9f69/blt1e157c8aeac3fbd1/602751912e2b15565cb6cbb9/logo-google-workspace.svg",
      category: "Event Tips",
      title: "Google Workspace",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/ee/78/ed/ee78ed7f-328e-9af1-265f-8353e74fbdfe/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
      category: "Reviews",
      title: "Amazon AWS",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2019-02/14/full/1550162947-7329.jpg",
      category: "Discover",
      title: "Zoho",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true",
      category: "Event Tips",
      title: "Microsoft 365",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/47/3e/f9/473ef9f8-7381-4c03-a285-b42f6dfb7bb8/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
      category: "Reviews",
      title: "Zoom",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC191ydTUzHxDF0naqYu59SdmwjnLIm6BJmw&usqp=CAU",
      category: "Discover",
      title: "Slack",
      url: "https://timerse.com"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Popular Saas Application on the Platform</HeadingTitle>
          <HeadingDescription>Some amazing applications that are made by even more amazing people.</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Title>{post.title}</Title>
                {/* <Link href={post.url}>Ahhhh Ahhhh Cumming Soon</Link> */}
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
