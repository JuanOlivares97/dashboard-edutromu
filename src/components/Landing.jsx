import Link from "next/link"

export default function Landing() {
  return (
    (<div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Edutromu</div>
          <Link
            href="/auth/login"
            className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100"
            prefetch={false}>
            Iniciar sesión
          </Link>
        </div>
      </header>
      <main className="container mx-auto my-12">
        <div className="mx-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-blue-500">Bienvenido a Edutromu</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Plataforma de aprendizaje en línea para estudiantes y docentes.
            </p>
          </div>
          <div
            className="bg-white border border-slate-200 border-blue-300 shadow-md rounded-md p-6 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Características</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-blue-500 h-6 w-6" />
                <span>Cursos en línea de alta calidad</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-blue-500 h-6 w-6" />
                <span>Herramientas de colaboración</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-blue-500 h-6 w-6" />
                <span>Seguimiento del progreso del estudiante</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>)
  );
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


