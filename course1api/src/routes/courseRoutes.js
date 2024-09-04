const express = require('express');
const router = express.Router();



const courses = [
  {
    _id: '1',
    name: 'Introduction to Web Development',
    instructor: 'dipali',
    description: 'This course covers the fundamentals of web development, including HTML, CSS, and basic JavaScript. Learn how to create and style web pages, and understand the core concepts of front-end development.',
    status: 'Open',
    duration: '6 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Room 101, Main Campus',
    prerequisites: ['Basic computer skills'],
    syllabus: [
      'Introduction to HTML',
      'Styling with CSS',
      'JavaScript Basics',
      'Responsive Design',
      'Project Work'
    ]
  },
  
  {
    _id: '2',
    name: 'Advanced Python Programming',
    instructor: 'priyanka',
    description: 'Dive deeper into Python programming with advanced topics including data analysis, web scraping, and machine learning. Build complex applications and work with popular Python libraries.',
    status: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
    location: 'Room 204, Tech Building',
    prerequisites: ['Introduction to Python Programming'],
    syllabus: [
      'Advanced Data Structures',
      'Web Scraping with BeautifulSoup',
      'Data Analysis with Pandas',
      'Introduction to Machine Learning',
      'Capstone Project'
    ]
  },
  {
    _id: '3',
    name: 'Fundamentals of Graphic Design',
    instructor: 'sayli',
    description: 'Explore the basics of graphic design, including typography, color theory, and layout. Learn how to use design tools and create visually appealing graphics for various media.',
    status: 'Closed',
    duration: '4 weeks',
    schedule: 'Saturdays, 10:00 AM - 2:00 PM',
    location: 'Design Studio, Building B',
    prerequisites: ['None'],
    syllabus: [
      'Principles of Design',
      'Typography Basics',
      'Color Theory',
      'Layout and Composition',
      'Design Software Introduction'
    ]
  },
  {
    _id: '4',
    name: 'Data Science with R',
    instructor: 'David Brown',
    description: 'Learn data science techniques using R programming. Cover data manipulation, statistical analysis, and data visualization. Ideal for those interested in pursuing a career in data science.',
    status: 'Open',
    duration: '10 weeks',
    schedule: 'Fridays, 1:00 PM - 4:00 PM',
    location: 'Room 305, Data Science Center',
    prerequisites: ['Basic statistics', 'Familiarity with R programming'],
    syllabus: [
      'Data Manipulation with dplyr',
      'Data Visualization with ggplot2',
      'Statistical Analysis',
      'Data Wrangling',
      'Project Work'
    ]
  },
  {
    _id: '5',
    name: 'Introduction to Digital Marketing',
    instructor: 'pooja',
    description: 'Get an overview of digital marketing strategies including SEO, social media marketing, and email campaigns. Learn how to create effective marketing plans and measure their success.',
    status: 'Open',
    duration: '5 weeks',
    schedule: 'Mondays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic understanding of marketing principles'],
    syllabus: [
      'Introduction to Digital Marketing',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Email Marketing Strategies',
      'Analytics and Measurement'
    ]
  }
  
  
  
  
];




router.get('/courses', (req, res) => {
  res.json(courses);
});


router.get('/courses/:id', (req, res) => {
  const course = courses.find(c => c._id === req.params.id);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' }); 
  }
  res.json(course);
});
router.patch('/courses/:id/enrollment-status', (req, res) => {
  const course = courses.find((c) => c._id === req.params.id);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  const { status } = req.body; 
  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  
  course.status = status;
  res.json({ message: 'Course status updated successfully', course });
});



module.exports = router;
