// Advertises.tsx
export default function Advertises() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Why choose us
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Featured Hotels
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="hover:scale-105 transition-transform duration-300">
            <strong className="text-gray-900 dark:text-gray-100">
              Lake Geneva Resort:
            </strong>
            <span className="text-gray-600 dark:text-gray-400">
              {" "}
              Enjoy stunning views of the lake and luxurious amenities.
            </span>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <strong className="text-gray-900 dark:text-gray-100">
              Swiss Alps Hotel:
            </strong>
            <span className="text-gray-600 dark:text-gray-400">
              {" "}
              Experience breathtaking mountain scenery and world-class service.
            </span>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <strong className="text-gray-900 dark:text-gray-100">
              Zermatt Ski Lodge:
            </strong>
            <span className="text-gray-600 dark:text-gray-400">
              {" "}
              The perfect getaway for skiing enthusiasts and winter sports
              lovers.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Special Offers
        </h3>
        <p className="mb-2 text-gray-600 dark:text-gray-400">
          <strong>
            ✨ Book your stay for 3 nights and get the 4th night free!
          </strong>
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Enjoy a complimentary breakfast for two with every booking made this
          month.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Customer Testimonials
        </h3>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 mb-4">
          &quot;Our stay at the Lake Geneva Resort was absolutely amazing! The
          service was impeccable, and the views were breathtaking.&quot; -{" "}
          <cite>Jane D.</cite>
        </blockquote>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300">
          &quot;The Swiss Alps Hotel exceeded our expectations! A true paradise
          for relaxation and adventure.&quot; - <cite>Mark T.</cite>
        </blockquote>
      </section>
    </div>
  );
}
