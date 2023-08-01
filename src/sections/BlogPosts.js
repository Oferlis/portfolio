export default function BlogPosts() {
  return (
    <div id="blog-posts" className="div-ex row-div blog-div">
      <h1 className="skills-head">Blog posts</h1>
      <div className="grid-container">
        <div
          className="card"
          onClick={() =>
            window.open(
              "https://dev.to/oferlis/chatgpt-how-i-used-it-to-convert-http-requests-to-openapi-document-1n4m"
            )
          }
        >
          <div className="main-content">
            <p className="heading">
              ChatGPT: how I used it to convert HTTP requests to OpenAPI
              document
            </p>
            <div className="categories">
              <span>ChatGPT</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="main-content">
            <p className="heading">upcoming...</p>
          </div>
        </div>
        <div className="card">
          <div className="main-content">
            <p className="heading">Upcoming...</p>
          </div>
        </div>
      </div>
    </div>
  );
}