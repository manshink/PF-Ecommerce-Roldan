import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 mt-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Columna de información */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-4">Apple</h3>
                    <p className="text-lg text-gray-400 mb-4">
                        Tu tienda de confianza para las mejores ofertas y productos de Apple de Calidad.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-xl font-semibold text-white mb-4">Enlaces Rápidos</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-yellow-400 transition duration-200">Inicio</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition duration-200">Productos</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition duration-200">Ofertas</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition duration-200">Contacto</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-xl font-semibold text-white mb-4">Contáctanos</h4>
                    <p className="text-lg text-gray-400 mb-4">Email: contacto@shopease.com</p>
                    <p className="text-lg text-gray-400 mb-4">Teléfono: +1 800 123 4567</p>
                    <p className="text-lg text-gray-400">Dirección: Calle Ficticia 123, Ciudad, País</p>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6">
                <p className="text-center text-gray-400 text-sm">
                    &copy; 2025 Apple. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
