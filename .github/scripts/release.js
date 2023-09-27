// List of merged pull requests in Markdown
exports.changelog = (changeset) => {
  let entries = new Set();

  for (const { node: { associatedPullRequests: prs } } of changeset.repository.ref.compare.commits.edges) {
    for (const { node: { number: number } } of prs.edges) {
      entries.add(number);
    }
  }

  return Array.from(entries).sort((a, b) => a - b).map(pr => `- #${pr}`);
};

// Next semantic version number
exports.nextVersion = (current, increment, preRelease) => {
  let [major, minor, patch] = current.split('.');
  let [unstaged, stage] = current.split('-');
  preRelease = preRelease === "true";

  // end pre-release
  if (!preRelease && stage) {
    return unstaged;
  }

  // bump pre-release
  if (preRelease && stage) {
    let [_, stageVersion] = stage.split('.');
    stageVersion = parseInt(stageVersion);
    if (isNaN(stageVersion)) {
      stageVersion = 0;
    }
    stageVersion++;
    return `${unstaged}-beta.${stageVersion}`;
  }

  switch (increment) {
    case 'patch':
      patch++;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
  }

  let version = [major, minor, patch].join('.');

  // start pre-release
  if (preRelease && !stage) {
    return `${version}-beta`;
  }

  return version;
};

// Compare two branches on Github
exports.compareBranches = async (github, { owner, repo, base, head }) => {
  return await github.graphql(`
    query($owner: String!, $repo: String!, $base: String!, $head: String!) {
        repository(owner: $owner, name: $repo) {
          name
          ref(qualifiedName: $base) {
            compare(headRef: $head) {
              aheadBy
              commits(first: 100) {
                edges {
                  node {
                    message
                    associatedPullRequests(first: 5) {
                      edges {
                        node {
                          number
                          labels(first: 5) {
                            nodes {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }
    `, { owner, repo, base, head });
}

// Scan the changelog to decide what kind of release we need
exports.detectChanges = (changeset) => {
  if (!changeset || changeset.repository.ref.compare.aheadBy < 1) {
    // Nothing to release
    return '';
  }

  let increment = 'patch';

  // increment based on the merged PR labels
  for (const { node: { associatedPullRequests: prs } } of changeset.repository.ref.compare.commits.edges) {
    for (const { node: { labels: { nodes: labels } } } of prs.edges) {
      for (const { name: label } of labels) {
        const normalizedLabel = label.toLowerCase().replace(' ', '-');
        switch (normalizedLabel) {
          case 'feature':
            increment = 'minor';
            break;
          case 'breaking-change':
            increment = 'major';
            return increment;
        }
      }
    }
  }

  return increment;
};

// Define next release
exports.bump = async ({ github, context, core }) => {
  const changeset = await this.compareBranches(github, {
    owner: context.repo.owner,
    repo: context.repo.repo,
    base: 'main',
    head: 'develop',
  });
  const changelog = this.changelog(changeset);
  const increment = this.detectChanges(changeset);
  const nextVersion = this.nextVersion(process.env.CURRENT_VERSION, increment, process.env.PRE_RELEASE);

  core.setOutput('increment', increment);
  core.setOutput('nextVersion', nextVersion);
  core.setOutput('changelog', changelog.join("\n"));
};
