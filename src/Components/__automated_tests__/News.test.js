import React from 'react';
import { render, screen } from '@testing-library/react';
import News from '../Main/News';
import NewsArticle from '../Main/NewsArticle';
//This test is checking if the News component renders the correct headings on the page. It expects to find two headings, one with the text "News" and the other with the text "The latest news from the Australian Cycling Team"
describe('News component', () => {
  test('renders the headings', () => {
    render(<News />);
    const headings = screen.getByRole('heading', { level: 2, name: 'News' });
    const subHeadings = screen.getByRole('heading', { level: 3, name: 'The latest news from the Australian Cycling Team' });
    expect(headings).toBeInTheDocument();
    expect(subHeadings).toBeInTheDocument();
  });
});
//This test is checking if the NewsArticle component renders the correct information for a given article. It expects to find an image, a title, content, and a date.
describe('NewsArticle component', () => {
  test('renders the article information', () => {
    const image = 'https://example.com/image.jpg';
    const title = 'Article title';
    const content = 'Article content';
    const date = 'Posted on 1-1-23';
    render(<NewsArticle image={image} title={title} content={content} date={date} />);
    const articleImage = screen.getByRole('img', { src: image });
    const articleTitle = screen.getByRole('heading', { level: 4, name: title });
    const articleContent = screen.getByText(content);
    const articleDate = screen.getByText(date);
    expect(articleImage).toBeInTheDocument();
    expect(articleTitle).toBeInTheDocument();
    expect(articleContent).toBeInTheDocument();
    expect(articleDate).toBeInTheDocument();
  });
});