---
title: Educational Jorney in Vienna
simple-title: Edu-Vienna
description: The answer to the question of why I'm still unemployed. This will be updated as time goes on. I hope...
date: 2026-05-02 12:00:00 +0200
# last_modified_at: 2025-05-25 12:00:00 +0200
categories: [Me and The World, Education]
tags: [university, my life]
pin: true
math: true
mermaid: true
media_subpath: /assets/posts/my-uni-wien/
image:
  path: main-building-1.jpg
  lqip: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYGBgYHBwYJCgkKCQ0MCwsMDRQODw4PDhQfExYTExYTHxshGxkbIRsxJiIiJjE4Ly0vOEQ9PURWUVZwcJYBBgYGBgYGBgcHBgkKCQoJDQwLCwwNFA4PDg8OFB8TFhMTFhMfGyEbGRshGzEmIiImMTgvLS84RD09RFZRVnBwlv/CABEIAA0AFAMBEQACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAADBQYH/9oACAEBAAAAAAEnm+bSP//EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/2gAIAQIQAAAAaJ5NDv/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAIAQMQAAAAiV2yT//EACMQAAICAQMEAwEAAAAAAAAAAAECAwQAERIhBQYiMRMjQXH/2gAIAQEAAT8AtJ1M1lkq0g5ckJqCvr23lt1B/MnriCqLMlqsUEWshAY6Pxx4g5PdjruFlMCkjcPsB4OW+9LMEDCKjCCV2gsdxV9o8hl/uPq03T5KrWW+BnDFPXP9GNZn14fTP//EAB8RAQACAQMFAAAAAAAAAAAAAAEAAgQREhQhMUFRYf/aAAgBAgEBPwAyl116QzLqH3wzlnpndSVqbibKz//EABwRAQACAgMBAAAAAAAAAAAAAAEAERRBAgQSUf/aAAgBAwEBPwB65ouYxS3qY79J6qPJbJbP/9k=
  alt: University of Vienna, the main building.
---

<style>
/* === ТАБЛИЦА === */
.course-row {
  cursor: pointer;
}

.course-details {
  display: none;
}

.course-details.show {
  display: table-row;
}

.course-details-d {
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: flex-end;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.course-details-d.show {
  opacity: 1;
  pointer-events: auto;
}

.course-details-d.show .side-panel-d {
  transform: translateX(0);
}

.side-panel-d {
  width: clamp(280px, 30vw, 500px);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;       /* по центру по вертикали */
  justify-content: center;

  padding: 20px;

  background: #1e1e1e;
  color: white;

  transform: translateX(100%);
  transition: transform 0.3s ease;

  box-shadow: -10px 0 30px rgba(0,0,0,0.3);
}

.course-details td {
  padding: 15px;
}

.course-status-progress { color: #f1c40f; font-weight: bold; }
</style>

The European freedom in education has a downside. If you’re an idiot like me, don’t know what you want, and aren’t confident in the success of your endeavors, there’s a chance you’ll spread yourself too thin trying to do everything at once. So, after giving it a lot of thought, I decided to somehow pin down a concrete study plan for myself.

For now, it looks like this.

```mermaid
gantt
    title My University Progress
    dateFormat  YYYY-MM

    section Bioinformatics
    Courses & Exams   : active, bio1, 2024-10, 34M
    Project           : bio2, 2026-10, 4M
    Thesis            : after bio2, 6M

    section Mathematics
    Courses & Exams   : active, math1, 2025-03, 19M
    Research Seminars : active, math2, 2025-10, 9M
    Thesis            : after math2, 6M
```

I really want to finish both master’s programs for two reasons. Firstly, I simply find them interesting. Secondly, it seems to me that many *gebildete Personen* in Austria have more than one degree, and since I want to integrate into that part of Austrian society, I need to work harder than the average student.


## Master Mathematics

My primary interest lies in applied mathematics. I devote most of my time and effort to this field, in other words, it is my top priority. The curriculum of this program can, in general, be represented by the following diagram.

```mermaid
mindmap
  root(Applied mathematics and scientific computing<br/>120 ECTS)
    Core Modules<br/>30 ECTS
      Numerical Analysis<br/>10 ECTS
      Optimization<br/>6 ECTS
      Applied Analysis<br/>6 ECTS
      Research Seminars<br/>8 ECTS
    Specialized Electives<br/>21 ECTS
    Interdisciplinary Modules<br/>24 ECTS
      Geometry and Topology<br/>8 ECTS
      Analysis<br/>6 ECTS
      Stochastics<br/>4 ECTS
    Further Electives<br/>15 ECTS
    Master Thesis<br/>27 ECTS
    Defensio<br/>3 ECTS
```

My current course progress and overall impressions are summarized in the table below.

<div class="course-table-wrapper">
  <table class="course-table">
    <thead>
      <tr>
        <th>Course</th>
        <th style="text-align: center;">Type</th>
        <th style="text-align: center;">ECTS</th>
        <th style="text-align: center;">Grade</th>
      </tr>
    </thead>
    <tbody>
      <!-- Advanced Numerical Analysis -->
      <tr class="course-row" data-id="m1">
        <td style="padding-right: 200px;">Advanced Numerical Analysis</td>
        <td style="width: 100px; text-align: center;">VO</td>
        <td style="width: 100px; text-align: center;">7</td>
        <td style="width: 100px; text-align: center;">1</td>
      </tr>
      <tr></tr>
      <tr class="course-row" data-id="m1">
        <td style="color: transparent;">Advanced Numerical Analysis</td>
        <td style="text-align: center;">PS</td>
        <td style="text-align: center;">4</td>
        <td class="course-status-progress">In progress</td>
      </tr>
      <tr class="course-details" data-id="m1">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Assoz.-Prof. Dr. Vladimir Kazeev
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Tutor:</div>
              <div class="per-content">
                Dr. Enrico Zampa
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                PS in 2026S, VO in 2025S
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250071&semester=2026S" target="_blank">📖 u:find PS</a>, <a href="https://ufind.univie.ac.at/de/course.html?lv=250078&semester=2025S" target="_blank">📖 u:find VO</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2"></td>
      </tr>
      <!-- Nonlinear Optimization -->
      <tr class="course-row" data-id="m2">
        <td>Nonlinear Optimization</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;">1</td>
      </tr>
      <tr></tr>
      <tr class="course-row" data-id="m2">
        <td style="color: transparent;">Nonlinear Optimization</td>
        <td style="text-align: center;">PS</td>
        <td style="text-align: center;">4</td>
        <td style="text-align: center;">2</td>
      </tr>
      <tr class="course-details" data-id="m2">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Radu Ioan Bot
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Tutor:</div>
              <div class="per-content">
                Mag. Chiara Schindler
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025W
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250049&semester=2025W" target="_blank">📖 u:find PS</a>, <a href="https://ufind.univie.ac.at/de/course.html?lv=250010&semester=2025W" target="_blank">📖 u:find VO</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
          <a href="/assets/posts/my-uni-wien/NonLinOpt.pdf" target="_blank">🧾 Lecture Notes</a>
        </td>
      </tr>
      <!-- Applied Analysis -->
      <tr class="course-row" data-id="m3">
        <td>Applied Analysis</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">6</td>
        <td class="course-status-progress">In Progress</td>
      </tr>
      <tr class="course-details" data-id="m3">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturers:</div>
              <div class="per-content">
                Priv.-Doz. Dr. Monika Dörfler,<br>
                Univ.-Prof. Dr. Norbert Mauser,<br>
                Dr. Hans Peter Stimming
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025W
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250009&semester=2025W" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
          <a href="/assets/posts/my-uni-wien/AppAnP1.pdf" target="_blank">🧾 Lecture Notes: Part 1</a>,<br>
          <a href="/assets/posts/my-uni-wien/AppAnP2.pdf" target="_blank">🧾 Lecture Notes: Part 2</a>
        </td>
      </tr>
      <!-- Optimization Seminar -->
      <tr class="course-row" data-id="m4">
        <td>Optimization</td>
        <td style="text-align: center;">SE</td>
        <td style="text-align: center;">4</td>
        <td style="text-align: center;">1</td>
      </tr>
      <tr class="course-details" data-id="m4">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Supervisor:</div>
              <div class="per-content">
                Assoz.-Prof. Dr. Hermann Schichl
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025W
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250101&semester=2025W" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
          <a href="/assets/posts/my-uni-wien/SemOpt.pdf" target="_blank">🎓 Seminar Work</a>
        </td>
      </tr>
      <!-- Seminar Applied Mathematics -->
      <tr class="course-row" data-id="m5">
        <td>Applied Mathematics</td>
        <td style="text-align: center;">SE</td>
        <td style="text-align: center;">4</td>
        <td class="course-status-progress">In Progress</td>
      </tr>
      <tr class="course-details" data-id="m5">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Superviser:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Norbert Mauser
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2026S
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250094&semester=2026S" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
          <!-- <a href="TODO" target="_blank">TODO</a> -->
        </td>
      </tr>
      <!-- Convex Optimization -->
      <tr class="course-row" data-id="m6">
        <td style="padding-right: 200px;">Convex Optimization</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;">1</td>
      </tr>
      <tr class="course-details" data-id="m6">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Radu Ioan Bot
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025S
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250100&semester=2025S" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
        </td>
      </tr>
      <!-- Kinetic theory app to bio -->
      <tr class="course-row" data-id="m7">
        <td>Kinetic Theory Applied to Biology</td>
        <td style="text-align: center;">VU</td>
        <td style="text-align: center;">7</td>
        <td style="text-align: center;">1</td>
      </tr>
      <tr class="course-details" data-id="m7">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Sara Merino Aceituno
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025S
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250043&semester=2025S" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
        </td>
      </tr>
      <!-- Mathematical PopGen -->
      <tr class="course-row" data-id="m8">
        <td>Mathematical Population Genetics</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">5</td>
        <td style="text-align: center;">2</td>
      </tr>
      <tr class="course-details" data-id="m8">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Emmanuel Schertzer
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025S
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250106&semester=2025S" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
          <a href="/assets/posts/my-uni-wien/PopGen.pdf" target="_blank">🧾 Lecture Notes</a>
        </td>
      </tr>
      <!-- Low Dimensional Topology -->
      <tr class="course-row" data-id="m9">
        <td>Low Dimensional Topology</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;">1</td>
      </tr>
      <tr class="course-details" data-id="m9">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Assoz.-Prof. Dr. Vera Vértesi
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025S
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250150&semester=2025S" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2"></td>
      </tr>
      <!-- Stochastic Processes -->
      <tr class="course-row" data-id="m10">
        <td>Stochastic Processes</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;">2</td>
      </tr>
      <tr class="course-details" data-id="m10">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Nathanael Berestycki
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025W
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250042&semester=2025W" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
          <a href="/assets/posts/my-uni-wien/StPr.pdf" target="_blank">🧾 Lecture Notes</a>
        </td>
      </tr>
      <!-- Advanced Measure Theory -->
      <tr class="course-row" data-id="m11">
        <td>Advanced Measure Theory</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;">2</td>
      </tr>
      <tr class="course-details" data-id="m11">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Hendrik Bruin
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025W
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=250041&semester=2025W" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2"></td>
      </tr>
    </tbody>
  </table>

  <!-- DESCRIPTIONS -->
  <!-- Advanced Numerical Analysis -->
  <div class="course-details-d" data-id="TODO">
    <div class="side-panel-d">
      <div style="overflow-x: visible !important;">TODO</div>
    </div>
  </div>
  <!-- Nonlinear Optimization -->
  <div class="course-details-d" data-id="m2">
    <div class="side-panel-d">
      <p>The course wasn’t difficult, but it was quite extensive. Professor Boţ provided excellent lecture notes, which made preparing for the exam enjoyable. It’s always nice when mathematical texts are rigorous.
      </p>
      <p>Ms. Schindler was very understanding toward me. Because of stomach issues, I missed a number of seminars, and she agreed to let me complete them individually. And honestly, besides being very smart, she’s also really charming. Yeah, that sounds a bit cringe, but it’s true!
      </p>
    </div>
  </div>
  <!-- Applied Analysis -->
  <div class="course-details-d" data-id="TODO">
    <div class="side-panel-d">
      TODO
    </div>
  </div>
  <!-- Seminar Optimization -->
  <div class="course-details-d" data-id="m4">
    <div class="side-panel-d">
      There were only five of us, so there was no pressure — you just study a topic, present it, and enjoy the process. I had the most applied topic, and I feel like it didn’t really resonate with many people. But I found it interesting, even though it was challenging.
    </div>
  </div>
  <!-- Seminar Applied Mathematics -->
  <div class="course-details-d" data-id="TODO">
    <div class="side-panel-d">
      TODO
    </div>
  </div>
  <!-- Convex Optimization -->
  <div class="course-details-d" data-id="m6">
    <div class="side-panel-d">
      The course was difficult and extensive. Professor Boţ is a veeeery strict guy, which made the lectures challenging and, as a consequence, interesting. These were my first lectures at the Faculty of Mathematics at the University of Vienna, so yeah — very warm memories.
    </div>
  </div>
  <!-- Kinetic theory app to bio -->
  <div class="course-details-d" data-id="m7">
    <div class="side-panel-d">
      <p>The course was interesting, and the problems were enjoyable to work through. But at some point, closer to the end, it felt like we got stuck in one place. There was quite a lot of hand-waving, which personally annoys me, though it’s understandable — otherwise the course would probably have been impossible to manage.
      </p>
      <p>Although, to be fair, it <i>would</i> have been possible, but only with a huge amount of extra effort put into the course. The professor was already trying her best.
      </p>
    </div>
  </div>
  <!-- Mathematical Population Genetics -->
  <div class="course-details-d" data-id="m8">
    <div class="side-panel-d">
      <p>
        “The sexual reproducing is very boring.” © E. Scherzer
      </p>
      <p>
        The lectures were good, and the lecturer was just pure flex. But the subject itself… Before this course, I thought I would specialize in biomathematics, but after taking it — no, please no.
      </p>
    </div>
  </div>
  <!-- Low Dimensional Topology -->
  <div class="course-details-d" data-id="m9">
    <div class="side-panel-d">
      <p>
        I absolutely love topology. At the same time, topology <i>courses</i> drive me crazy. It often feels impossible to prove anything rigorously — doing everything properly would probably take 120 ECTS credits for a single course alone. On the bright side, I finally managed to understand Khovanov homology, which became the topic of my presentation.
      </p>
    </div>
  </div>
  <!-- Stochastic Processes -->
  <div class="course-details-d" data-id="m10">
    <div class="side-panel-d">
        I did not attend the classes. I had already taken a course in stochastic processes in Russia, so before the exam here I just spent four hours going through the lecture notes and then went in to take the exam.
    </div>
  </div>
  <!-- Advanced Measure Theory -->
  <div class="course-details-d" data-id="m11">
    <div class="side-panel-d">
      <p>
        Unfortunately, because of scheduling conflicts, I was unable to attend the classes, so I mostly studied from the recommended textbooks on my own. To be honest, I was disappointed after the exam. I had expected more from myself. Forgetting a proof that I had memorized beforehand was rather embarrassing.
      </p>
      <p>
        At least now I am certain that, regardless of the circumstances — and under any New Year’s tree — I can define the Lebesgue integral.
      </p>
    </div>
  </div>
</div>



## Master Bioinformatics

This is my second field of study. Mathematics is certainly fascinating, but if an academic career does not work out, one still needs to earn a living, which is why I have placed some hopes in a degree in Computer Science. The curriculum here is less flexible and looks as follows.

```mermaid
mindmap
  root(Bioinformatics<br/>120 ECTS)
    Core Modules<br/>56 ECTS
      Essentials of Mathematics, Informatics, and Biology<br/>30 ECTS
      Algorithmic Bioinformatics<br/>6 ECTS
      Bioinformatics of Sequences and Structures<br/>6 ECTS
      Statistical Methods of Bioinformatics<br/>6 ECTS
      Software<br/>Development Project<br/>8 ECTS
    Specialized Electives<br/>20 ECTS
    Special Disciplines<br/>14 ECTS
    Master Thesis<br/>27 ECTS
    Defensio<br/>3 ECTS
```

Even though this is technically the program through which my residence permit is being extended by the local authorities, and although it would probably be wiser to prioritize it instead, I do not devote nearly as much time and effort to it. Nevertheless, my progress is summarized in the table below.

<div class="course-table-wrapper">
  <table class="course-table">
    <thead>
      <tr>
        <th>Course</th>
        <th style="text-align: center;">Type</th>
        <th style="text-align: center;">ECTS</th>
        <th style="text-align: center;">Grade</th>
      </tr>
    </thead>
    <tbody>
      <!-- Essential Mathematics for Bioinformatics -->
      <tr class="course-row" data-id="b1">
        <td>Essential Mathematics for Bioinformatics</td>
        <td style="text-align: center;">Module Exam</td>
        <td style="text-align: center;">10</td>
        <td style="text-align: center;">1</td>
      </tr>
      <tr class="course-details" data-id="b1">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Examiner:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Ivo Hofacker
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2024W
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
        </td>
      </tr>
      <!-- Essential Computer Science for Bioinformatics -->
      <tr class="course-row" data-id="b2">
        <td>Essential Computer Science for Bioinformatics</td>
        <td style="text-align: center;">Module Exam</td>
        <td style="text-align: center;">10</td>
        <td style="text-align: center;">3</td>
      </tr>
      <tr class="course-details" data-id="b2">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Examiner:</div>
              <div class="per-content">
                Dr. Heiko Andreas Schmidt
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2024W
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
        </td>
      </tr>
      <!-- Essential Biology for Bioinformatics -->
      <tr class="course-row" data-id="b3">
        <td>Essential Biology for Bioinformatics</td>
        <td style="text-align: center;">Module Exam</td>
        <td style="text-align: center;">10</td>
        <td style="text-align: center;">3</td>
      </tr>
      <tr class="course-details" data-id="b3">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Examiner:</div>
              <div class="per-content">
                Dr. Stefan Badelt
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2026S
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
        </td>
      </tr>
      <!-- Fundamentals in Systems Biology -->
      <tr class="course-row" data-id="b4">
        <td>Fundamentals in Systems Biology</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">3</td>
        <td style="text-align: center;">1</td>
      </tr>
      <tr class="course-details" data-id="b4">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturers:</div>
              <div class="per-content">
                Assoz.-Prof. Dr. Christoph Flamm,<br>
                Priv.-Doz. Dr. Stefanie Widder
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2025W
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=301696&semester=2025W" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2">
        </td>
      </tr>
      <!-- Computational Structural Biology -->
      <tr class="course-row" data-id="b5">
        <td>Computational Structural Biology</td>
        <td style="text-align: center;">VO</td>
        <td style="text-align: center;">3</td>
        <td style="text-align: center;">4</td>
      </tr>
      <tr class="course-details" data-id="b5">
        <td colspan="2">
          <div class="per">
            <div class="per-item">
              <div class="per-date">Lecturer:</div>
              <div class="per-content">
                Univ.-Prof. Dr. Bojan Zagrovic
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Semester:</div>
              <div class="per-content">
                2026S
              </div>
            </div>
            <div class="per-item">
              <div class="per-date">Description:</div>
              <div class="per-content">
                <a href="https://ufind.univie.ac.at/de/course.html?lv=301232&semester=2026S" target="_blank">📖 u:find</a>
              </div>
            </div>
          </div>
        </td>
        <td colspan="2"></td>
      </tr>
    </tbody>
  </table>

  <!-- DESCRIPTIONS -->
  <!-- Essential Mathematics for Bioinformatics -->
  <div class="course-details-d" data-id="b1">
    <div class="side-panel-d">
      <div style="overflow-x: visible !important;">Easy</div>
    </div>
  </div>
  <!-- Essential Computer Science for Bioinformatics -->
  <div class="course-details-d" data-id="b2">
    <div class="side-panel-d">
      During the practical part of the exam, I had to deal with a German keyboard layout for the first time in my life.
    </div>
  </div>
  <!-- Essential Biology for Bioinformatics -->
  <div class="course-details-d" data-id="b3">
    <div class="side-panel-d">
      <p>
        Instead of properly studying for the exam, I spent my time writing free verse to a girl who had absolutely no interest in me. Walking into the exam, my attitude was basically:
      </p>
      <p>
        “Well, A–T and G–C — what else could they possibly want from me?”
      </p>
      <p>
        In the end, I only passed on my second attempt.
      </p>
    </div>
  </div>
  <!-- Fundamentals in Systems Biology -->
  <div class="course-details-d" data-id="b4">
    <div class="side-panel-d">
      <p>
        Professor Flamm is a saint. Besides the lecture slides, he also provided LaTeX handouts.
      </p>
      <p>
        ABSOLUTE RESPECT.
      </p>
    </div>
  </div>
  <!-- Computational Structural Biology -->
  <div class="course-details-d" data-id="b5">
    <div class="side-panel-d">
      <p>
        The lectures were organized as an intensive two-week block, with classes every day from 9 a.m. to noon. It completely disrupted my schedule, so I ended up not attending.
      </p>
      <p>
        I basically just went through the slides. No offense to the professor — he is genuinely awesome and extremely busy — but the slides were awful.
      </p>
    </div>
  </div>
</div>

I am doing my best, even though it may still not be enough. I hope everything works out in the end. My mother and grandmother support me financially throughout all of this, so I would feel terribly guilty if I failed.

<script>
document.addEventListener("DOMContentLoaded", function () {

  const wrappers = document.querySelectorAll('.course-table-wrapper');

  wrappers.forEach(wrapper => {
    const rows = wrapper.querySelectorAll('.course-row');
    const details = wrapper.querySelectorAll('.course-details');
    const details_d = wrapper.querySelectorAll('.course-details-d');

    rows.forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.id;

        // закрыть все
        details.forEach(d => {
          if (d.dataset.id !== id) d.classList.remove('show');
        });
        details_d.forEach(d => {
          if (d.dataset.id !== id) d.classList.remove('show');
        });

        // переключить текущий
        const current = wrapper.querySelector('.course-details[data-id="' + id + '"]');
        if (!current.classList.contains('show')) {
          const current_d = wrapper.querySelector('.course-details-d[data-id="' + id + '"]');
          current_d?.classList.add('show');
          current_d?.addEventListener('click', (e) => {
            if (e.target === current_d) {
              current_d.classList.remove('show');
            }
          });
        }
        current.classList.toggle('show');
      });
    });
  });
});
</script>
