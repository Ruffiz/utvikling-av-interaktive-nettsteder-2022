import { useState } from "react";

const AsideContent = () => {
  const articles = [
    {
      id: 1,
      alt: "Bilde av noe",
      src: "https://images.unsplash.com/photo-1644480417721-0aa386122e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      header: "Overskrift 1",
      spanText:
        "Shaman taxidermy pickled austin readymade pinterest tumeric aesthetic viral keffiyeh quinoa venmo distillery tousled.",
    },
    {
      id: 2,
      alt: "Bilde av noe annet",
      src: "https://images.unsplash.com/photo-1644433329707-2b528437a7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      header: "Overskrift 2",
      spanText:
        "Tousled bespoke you probably haven't heard of them stumptown pour-over.",
    },
    {
      id: 3,
      alt: "Bilde av noe helt annet",
      src: "",
      header: "Overskrift 3",
      spanText: "Tømme søppelbilen rett i hagen!",
    },
  ];

  const [seeMore, setSeeMore] = useState({});

  const handleSidebarButtons = (id) => (event) => {
    event.preventDefault();
    //setSeeMore(!seeMore);
    setSeeMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <aside className="aside-content">
        <h2>Siste innlegg</h2>
        {articles.map(({ id, alt, src, header, spanText }) => (
          <article key={id}>
            <img alt={alt} src={src} />
            <section>
              <h3>{header}</h3>
              <p>
                <button
                  id={id}
                  type="button"
                  onClick={handleSidebarButtons(id)}
                >
                  See more
                </button>
                {seeMore[id] && <span>{spanText}</span>}
              </p>
            </section>
          </article>
        ))}
        {/* <article>
          <img
            alt="Bilde av noe"
            src="https://images.unsplash.com/photo-1644480417721-0aa386122e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          />
          <section>
            <h3>Overskrift 1</h3>
            <p>
              <button type="button" onClick={handleSidebarButton}>
                See more
              </button>
              {seeMore && (
                <span>
                  Shaman taxidermy pickled austin readymade pinterest tumeric
                  aesthetic viral keffiyeh quinoa venmo distillery tousled.
                </span>
              )}
            </p>
          </section>
        </article>
        <article>
          <img
            alt="Bilde av noe annet"
            src="https://images.unsplash.com/photo-1644433329707-2b528437a7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <section>
            <h3>Overskrift 2</h3>
            <p>
              <button type="button">See more</button>
              {seeMore && (
                <span>
                  Tousled bespoke you probably haven't heard of them stumptown
                  pour-over.
                </span>
              )}
            </p>
          </section>
        </article> */}
      </aside>
    </>
  );
};

export default AsideContent;
