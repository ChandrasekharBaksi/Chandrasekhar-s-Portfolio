export const Projects = () => {
    const projects = [
        { id: 1, title: "Project One", banner: "https://via.placeholder.com/400x200" },
        { id: 2, title: "Project Two", banner: "https://via.placeholder.com/400x200" },
        { id: 3, title: "Project Three", banner: "https://via.placeholder.com/400x200" },
        { id: 4, title: "Project Four", banner: "https://via.placeholder.com/400x200" },
        { id: 5, title: "Project Five", banner: "https://via.placeholder.com/400x200" },
        { id: 6, title: "Project Six", banner: "https://via.placeholder.com/400x200" },
        { id: 7, title: "Project Seven", banner: "https://via.placeholder.com/400x200" },
        { id: 8, title: "Project Eight", banner: "https://via.placeholder.com/400x200" },
        { id: 9, title: "Project Nine", banner: "https://via.placeholder.com/400x200" },
    ];

    return (
        <div className="portfolio max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="card group relative overflow-hidden rounded-lg border border-gray-300 shadow-md"
                    style={{ aspectRatio: "16 / 9" }}
                >
                    <img
                        src={project.banner}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h3 className="text-white text-lg font-bold group-hover:text-red-400 relative">
                            {project.title}
                            <span className="block h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-300"></span>
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    )
}