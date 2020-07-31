const listRepos = async username => {
    const repos = await fetch(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
        )
        .then(res => res.json())
        .catch(error => console.error(error));
        
        const markup = repos
            .map(
                repo => `
                <li>
                    <a href="${repo.html_url}">${repo.name}</a>
                    (${repo.stargazers_count})
                </li>
                `
            )
            .join('')

            const content = document.getElementById('content');
            content.innerHTML = `<ul>${markup}</ul>`;
    
};

listRepos('gisu');

/* 

const generateList = (data) => {
  return `
    <li>
      <a href="${data.html_url}">${data.name}</a>
      (${data.stargazers_count})
  </li>
  `
}
const convertMarkup = data => data.map(val => generateList(val)).join('')

const generateMarkup = (data, element) => {
  const content = document.getElementById(element);
  content.innerHTML = `<ul>${data}</ul>`;
}

const listRepos = async username => {
  try {
    const { res } = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
    const markup = convertMarkup(res.json())
    generateMarkup(markup, 'content')
  } catch (error) {
    console.error(error)
  }
};

listRepos('gisu');

*/