<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Zapatas Grafico') }}
        </h2>
    </x-slot>
    <script>
        MathJax = {
            loader: {
                load: ['input/asciimath', 'output/chtml']
            }
        }
    </script>
    <style>
        .tabulator-cell:not(.tabulator-editable):not(.tabulator-calcs>.tabulator-cell) {
            background-color: #f2f2f2 !important;
        }
    </style>
    <link href="https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css" rel="stylesheet">
    <script type="text/javascript" src="https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js"></script>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <div class="py-12">
        <div class="container mx-auto w-full">
            <div class="flex flex-wrap">
                <!-- Formulario -->
                <div class="w-full md:w-1/3">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Datoss Generales</h3>
                        <div class="overflow-auto">
                            <form id="zapatasForm">
                                @csrf
                                <table class="table-auto w-full text-gray-800 dark:text-white px-6">
                                    <tbody class="text-center">
                                        <tr>
                                            <th class="text-xl py-2 px-4 text-left border-b border-gray-600"
                                                colspan="4" scope="col">Cargas</th>
                                        </tr>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <td class="py-2 px-4" colspan="4">
                                                <div id="cargas"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-xl py-2 px-4 text-left border-b border-gray-600"
                                                colspan="4" scope="col">Propiedades</th>
                                        </tr>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <td class="py-2 px-4" colspan="4">
                                                <div id="propiedades"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-xl py-2 px-4 text-left border-b border-gray-600"
                                                colspan="4" scope="col">Poligono</th>
                                        </tr>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <td class="py-2 px-4" colspan="4">
                                                <div id="poligono"></div>
                                            </td>
                                        </tr>
                                        <!-- Agregar más filas según sea necesario -->
                                        <tr>
                                            <th class="py-2 px-4">
                                                <div class="input-group mb-2 text-left">
                                                    <button id="calcular"
                                                        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                                        type="submit">DISEÑAR</button>
                                                </div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Resultados -->
                <div class="w-full md:w-2/3 px-4 mt-4 md:mt-0">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Resultados</h3>
                        <div class="overflow-x-auto" id="resultados">
                            <table class="min-w-full text-gray-800 dark:text-white">
                                <tr class="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
                                    <th class="text-xl py-2 px-4 text-left" colspan="4">1.- Analisis Estructural
                                    </th>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata1"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata2"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata1"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata2"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata1"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata2"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata1"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata2"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata1"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata2"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata1"></td>
                                </tr>
                                <tr class="bg-gray-100 dark:bg-gray-600">
                                    <td class="py-2 px-4" colspan="4"><img style="width: 100%;" src=""
                                            alt="" id="zapata2"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js"></script>
    <script src="{{ asset('assets/js/mat4js.index.min.js') }}"></script>
    <script src="{{ asset('assets/js/adm_zapatas_grafico.js') }}" type="module"></script>

</x-app-layout>
