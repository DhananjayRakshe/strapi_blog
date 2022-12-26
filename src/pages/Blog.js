import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
	${tw`text-lg  text-gray-800`}
	p {
		${tw`mt-2 leading-loose`}
	}
	h1 {
		${tw`text-3xl font-bold mt-10`}
	}
	h2 {
		${tw`text-2xl font-bold mt-8`}
	}
	h3 {
		${tw`text-xl font-bold mt-6`}
	}
	ul {
		${tw`list-disc list-inside`}
		li {
			${tw`ml-2 mb-3`}
			p {
				${tw`mt-0 inline leading-normal`}
			}
		}
	}
`;
let headingText = "Privacy Policy";
export default ({ posts }) => {
	const params = useParams();
	// console.log(params.id);
	let post = posts.data.filter((posts) => posts.id == params.id);
	// console.log(post[0].attributes.blogTitle);

	return (
		<AnimationRevealPage>
			<Header />
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{post[0].attributes.blogTitle}</Heading>
					</HeadingRow>
					<Text>
						<p>
							<b>Published at: </b>
							{post[0].attributes.publishedDate}
						</p>

						<p>
							<b>Author: </b>
							{post[0].attributes.author}
						</p>
            <p><b>Blog Content:</b></p>
						<ReactMarkdown>{post[0].attributes.blogContent}</ReactMarkdown>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
