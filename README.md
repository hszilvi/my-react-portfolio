# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Challenge 13: React Portfolio

For this challenge, you will utilize what you have learned in `Module 13: React` to develop the initial scaffolding of your portfolio sites.

Now that you've worked with React and have multiple projects to share, it's time to develop the initial scaffolding for your first portfolio site as well as create and/or update other materials so that you can showcase your skills to potential employers. Creating a portfolio using React will help set you apart from other developers whose portfolios do not use some of the latest technologies.

## Instructions

* Students must fullfil the requirements listed in the following sections:

### Design

Remember, "good" design is subjective. Your site should look "polished" and "professional". Here are a few guidelines on what that means:

* Mobile-first design

* Choose a color palette for your site so it doesn't just look like the default bootstrap theme or an unstyled HTML site.

* Make sure the font size is large enough to read and that the colors don't cause eye strain.

### Base Requirements

* Technologies that must be used:
  * [ ] React
  * [ ] Navigation with `React Router`, dynamic rendering, or another third part router
* Your portfolio **must contain** the following information:
  * [ ] Your name
  * [ ] Links to your:
    * [ ] GitHub Profile
    * [ ] LinkedIn Page
    * [ ] Email Address
    * [ ] Phone Number - (optional)
    * [ ] PDF version of your resume
      * Your resume **must** contain up-to-date projects and professional experience
    * [ ] A list of projects (Challenges or Projects). For each project, make sure you have the following:
      * [ ] Project title
      * [ ] Link to the deployed version
      * [ ] Link to the GitHub repository
      * [ ] GIF or screenshot of the deployed application

### Required Components

* At a minium, your portfolio must render these 6 components:
  1. [ ] App
  2. [ ] Header
  4. [ ] Home
  5. [ ] Project Gallery
  6. [ ] Project
  7. [ ] Contact

### Required Component Content

* [ ] App:
  * [ ] Must be your top level component and render all necessary children components
* [ ] Header:
  * [ ] Must be rendered across the entire site
  * [ ] Must Contain a Navbar
* [ ] Project Gallery:
  * [ ] Must render dynamically 6 instances of the Project component
    * [ ] Be sure to store your project data in a JSON file and import it into your project
* [ ] Project:
  * [ ] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
  * [ ] Must utilize router props to properly render the right project based on user selection
  * [ ] Must render the following info:
    * [ ] Project title
    * [ ] Link to the deployed version
    * [ ] Link to the GitHub repository
    * [ ] GIF or screenshot of the deployed application
* [ ] Contact:
  * [ ] Must have contact information
  * [ ] Have a contact form for handling events
* [ ] Home:
  * This should be a welcome landing page that contains:
    * [ ] Your Name
    * [ ] A Headshot of you
    * [ ] Your brand statement
    * [ ] Some indication that this is your portfolio site

### Updated Social Media Presence

#### LinkedIn

* Make sure to update your LinkedIn Profile with the new skills you've acquired since the last time it was updated.
* If you do not have a LinkedIn profile, please create one.

#### GitHub

* Update GitHub profile with pinned repositories featuring those same projects.

## Grading

This challenge is assessed on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria

### Deployment: 32%

* Application deployed at live URL (if applicable).

* Application loads with no errors.

* Application GitHub URL submitted (if applicable).

* GitHub repository that contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application uses a color scheme other than the default Bootstrap color palette.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

progress bar
https://react-bootstrap.netlify.app/docs/components/progress


credits:
waving emoji: https://jarv.is/notes/css-waving-hand-emoji/
icons: https://icons8.com/icon/set/react/color

pdf
https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
https://pspdfkit.com/blog/2022/how-to-display-a-pdf-in-react/
https://www.shecodes.io/athena/12109-how-to-upload-a-pdf-file-in-react

router
https://www.youtube.com/watch?v=XBRLVRjZ3CQ

https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/


 <>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h4>If you are interested in working together, get in touch with me.</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" value={formData.email} onChange={handleInputChange}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" value={formData.message} onChange={handleInputChange}>
        <Form.Label>Your message...</Form.Label>
        
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button >Send message</Button>
      <ErrorMessage message="Please enter valid email and text message." />
    </Form>
    </>
  );