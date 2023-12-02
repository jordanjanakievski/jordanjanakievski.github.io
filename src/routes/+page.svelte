<script>
  import { onMount } from 'svelte';
  import DownArrow from './components/down_arrow.svelte';
  import DataCard from './components/data_card.svelte';
  import ProjectCard from './components/project_card.svelte';
  import ContactIcon from './components/contact_icon.svelte';
  import ContactCard from './components/contact_card.svelte';

  /**
   * @type {any}
   */
  let scroll;
  let chess_api_data = {
    chess_rapid: {
      last: {
        rating: 0
      }
    }
  };

  /**
   * @type {any}
   */
  let database_fetch = [
    {
      title: '',
      value: '',
      image: '',
      link: ''
    }
  ];

  const chess_api_url = 'https://api.chess.com/pub/player/jsquared2924/stats';
  const database_url =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6C-epQg8Zs16RFBYd26ADKpupBFx-vW73wOY-BSXxej6mb6I6tnjjr3puBkUT4e_06udA-638Lrh7/pubhtml';

  /**
   * @type {any[]}
   */
  let project_data = [];
  /**
   * @type {any[]}
   */
  let numbers_data = [];

  // Fetch request to get data from Chess.com API
  onMount(async () => {
    await fetch(chess_api_url)
      .then((res) => res.json())
      .then((data) => {
        chess_api_data.chess_rapid.last.rating = data.chess_rapid.last.rating;
      });
  });

  // Fetch request to get data from Google Sheets Database
  // This should not save the first row in the database as it is the header
  onMount(async () => {
    await fetch(database_url)
      .then((res) => res.text())
      .then((data) => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        let table = doc.querySelector('table');
        if (table == null) {
          return;
        }
        let rows = table.querySelectorAll('tr');
        let row_data = [];
        for (let i = 2; i < rows.length; i++) {
          let row = rows[i];
          let cols = row.querySelectorAll('td');
          let col_data = [];
          for (let j = 0; j < cols.length; j++) {
            col_data.push(cols[j].innerText);
          }
          row_data.push(col_data);
        }
        database_fetch = row_data.map((row) => {
          return {
            title: row[0],
            value: row[1],
            image: row[2],
            link: row[3]
          };
        });
      });
    project_data = database_fetch.splice(4, database_fetch.length - 1);
    numbers_data = database_fetch.splice(0, 4);
  });
</script>

<svelte:window bind:scrollY={scroll} />

<div class="hero">
  <h1 style:transform={`translate3d(0, ${scroll * -2}px, 0`}>
    Jordan<br />Janakievski
  </h1>
  <DownArrow />
</div>
<div class="about">
  <h2>About Me</h2>
  <div class="about-content">
    <p>
      Hi, my name is Jordan!
      <br /><br />
      I am an undergrad studying computer science at the University of Toronto. Having
      grown up in Seattle, I think of myself as someone of two countries, two cities,
      and two towers.
      <br /><br />
      My passion is to continue making a difference by developing software to improve
      people's lives. Whether it be direct impact through a software solution or
      contributing to a company that serves to better its community, I believe software
      can empower change and lead people and organizations to achieve the best possible
      outcomes.
      <br /><br />
      When away from the computer, I enjoy exploring the outdoors. Whether it be
      kayaking, SCUBA diving, or rock climbing, it is a great way to appreciate nature.
      I also enjoy playing tennis and soccer as well as being a referee for youth
      soccer on the weekends.
      <br /><br />
      I am also a novice horologist. While I only have a small collection, I love
      learning about the mechanisms of a watch and how they work together. I find
      the symbiotic relationship between the watch and its wearer to be so interesting.
    </p>
  </div>
  <div class="about-cards">
    <h3>By the Numbers</h3>
    <div class="about-data">
      <DataCard
        title="Chess.com Rating"
        data={chess_api_data.chess_rapid.last.rating}
        icon="chess-pawn"
      />
      {#each numbers_data as data}
        <DataCard title={data.title} data={data.value} icon={data.image} />
      {/each}
    </div>
  </div>
</div>
<div class="projects">
  <h2>Projects</h2>
  <div class="project-cards">
    {#each project_data as project}
      <ProjectCard
        title={project.title}
        icon={project.image}
        url={project.link}
      />
    {/each}
  </div>
</div>
<br /><br />
<br /><br />
<div class="contact">
  <h2>Thanks for visiting!</h2>
  <ContactCard title="Jordan Janakievski" />
  <h4>You can also find me at any of these places...</h4>
  <div class="contact-contents">
    <div class="contact-links">
      <ContactIcon icon="e-mail" url="mailto:jordan.a.janakievski@gmail.com" />
      <ContactIcon icon="github" url="https://github.com/jordanjanakievski" />
      <ContactIcon icon="gitlab" url="https://gitlab.com/jordanjanakievski" />
      <ContactIcon
        icon="linkedin"
        url="https://linkedin.com/in/jordan-janakievski"
      />
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Futura', sans-serif;
    background-color: #e0f1ff;
  }

  h1 {
    color: #fb2f2f;
    font-family: 'Futura', sans-serif;
    font-size: 82px;
    position: absolute;
    text-align: center;
  }

  h2 {
    color: #fb2f2f;
    font-family: 'Futura', sans-serif;
    font-size: 60px;
    text-align: center;
  }

  h3 {
    color: #fb2f2f;
    font-family: 'Futura', sans-serif;
    font-size: 48px;
    text-align: center;
  }

  h4 {
    color: #fb2f2f;
    font-family: 'Futura', sans-serif;
    font-size: 32px;
    text-align: center;
  }

  p {
    color: #1c2c44;
    font-family: 'Helvetica', sans-serif;
    font-size: 24px;
    text-align: left;
  }

  .hero {
    min-height: 100vh;
    max-width: 1440px;
    margin-left: 20%;
    margin-right: 20%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .about {
    min-height: 100vh;
    max-width: 1440px;
    position: relative;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .about-content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    max-width: 900px;
  }

  /* .about-images {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.memoji {
		width: 400px;
		height: 400px;
	} */

  .about-cards {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .about-data {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .projects {
    min-height: 100vh;
    max-width: 1440px;
    position: relative;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .project-cards {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .contact {
    min-height: 80vh;
    max-width: 1440px;
    width: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 10vh;
  }

  .cal-button {
	border-color: #fb2f2f;
	background-color: #e0f1ff;
	color: #fb2f2f;
	padding: 15px 32px;
	text-align: center;
	font-size: 24px;
	border-radius: 12px;
	margin-bottom: 20px;
	transition: 0.5s;
  }

  .cal-button:hover {
	transition: 0.5s;
	filter: drop-shadow(0 0 0.75rem rgb(0 0 0 / 0.4));
  }

  .contact-contents {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 200px;
  }

  .contact-links {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1160px) {
    .about-content {
      flex-direction: column;
    }

    /* .about-images {
			flex-direction: row;
		}

		.memoji {
			width: 300px;
			height: 300px;
		} */
  }

  @media only screen and (max-width: 840px) {
    .about-data {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 54px;
    }

    h2 {
      font-size: 38px;
    }

    h3 {
      font-size: 30px;
    }

    h4 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }

    .about {
      margin-left: 10%;
      margin-right: 10%;
    }

    /* .memoji {
			width: 160px;
			height: 160px;
		} */

    .projects {
      flex-direction: row;
    }
  }
</style>
