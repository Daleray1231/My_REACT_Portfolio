# React Portfolio README

## User Story
As an employer looking for candidates with experience building single-page applications, I want to view a potential employee's deployed React portfolio of work samples so that I can assess whether they're a good candidate for an open position.

## Acceptance Criteria
- When I load the portfolio, I am presented with a page containing a header, a section for content, and a footer.
- When I view the header, I see the developer's name and navigation with titles corresponding to different sections of the portfolio.
- When I view the navigation titles, I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted.
- When I click on a navigation title, I am presented with the corresponding section below the navigation without the page reloading, and that title is highlighted.
- When I load the portfolio the first time, the About Me title and section are selected by default.
- When I am presented with the About Me section, I see a recent photo or avatar of the developer and a short bio about them.
- When I am presented with the Portfolio section, I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository.
- When I am presented with the Contact section, I see a contact form with fields for a name, an email address, and a message.
- When I move my cursor out of one of the form fields without entering text, I receive a notification that this field is required.
- When I enter text into the email address field, I receive a notification if I have entered an invalid email address.
- When I am presented with the Resume section, I see a link to a downloadable resume and a list of the developer’s proficiencies.
- When I view the footer, I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter).

## Mock-Up
The following animation shows the web application's appearance and functionality:

[Include animated GIF or screenshot]

## Getting Started
The application that you built for this module will help you know where to start when building your portfolio. You’ll use Create React App just as you did with your module project, but you should be aware of a few structural differences in the component hierarchy. Your portfolio should include the following:

- A single Header component that appears on multiple pages.
- A single Navigation component within the header that will be used to render the different sections of your portfolio.
- A single Project component that will be used multiple times in the Portfolio section.
- A single Footer component that appears on multiple pages.

**Note**: The contact form should be similar to the one you built in the module project. Because this application doesn’t include a backend or connect to an API, you can set up this functionality the same way you did in the module project and add in backend functionality after you’ve covered it in the next few modules. In the meantime, consider adding your email address and phone number on the Contact page.

## Projects
For each project you feature in your portfolio, you should include the following:

- An image of the deployed application (either a GIF or a screenshot).
- The title of the project.
- A link to the deployed application.
- A link to the corresponding GitHub repository.

## Design
As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

- Use mobile-first design.
- Choose a color palette so that your site doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like [Coolors](https://coolors.co/) or another color scheme generator to help you create something that will stand out.
- Make sure the font size is large enough to read and that the colors don't cause eye strain.
- Consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.
