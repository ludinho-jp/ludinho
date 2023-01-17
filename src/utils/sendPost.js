const fs = require("fs/promises");

export default async function sendPost(post) {
  const blog = [];
  blog.push({ ...post, id: blog.length + 1 });

  await fs.writeFile("data.json", JSON.stringify(blog));
}
