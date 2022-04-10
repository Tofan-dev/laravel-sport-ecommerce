<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Add new product') }}
        </h2>
    </x-slot>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Sidebar style -->

    <style>
        /* Sidebar */
        .sidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            padding: 58px 0 0;
            /* Height of navbar */
            box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
            width: 240px;
            z-index: 600;
        }

        @media (max-width: 991.98px) {
            .sidebar {
                width: 100%;
            }
        }

        .sidebar .active {
            border-radius: 5px;
            box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
        }

        .sidebar-sticky {
            position: relative;
            top: 0;
            height: calc(100vh - 48px);
            padding-top: 0.5rem;
            overflow-x: hidden;
            overflow-y: auto;
            /* Scrollable contents if viewport is shorter than content. */
        }

    </style>

    <header>
        <!-- Sidebar -->
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
            <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                    <a href="{{ url('/dashboard') }}" class="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true">
                        <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                    </a>
                    <a href="{{ url('/products') }}" class="list-group-item list-group-item-action py-2 ripple active">
                        <i class="fas fa-chart-area fa-fw me-3"></i><span>Products</span>
                    </a>
                    <a href="{{ url('/reviews') }}" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>Reviews</span></a>
                    <a href="{{ url('/categories') }}" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-lock fa-fw me-3"></i><span>Categories</span></a>
                    <a href="{{ url('/users') }}" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>Users</span></a>
                    <a href="{{ url('/orders') }}" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>Orders</span></a>
                    <a href="{{ url('/sales') }}" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>Sales</span></a>
                </div>
            </div>
        </nav>
        <!-- Sidebar -->
    </header>

    <!--Main layout-->
    <main style="margin-top: 58px;">

        <div class="container">

            @if (session('successMsg'))
                <div class="alert alert-success" role="alert">
                    {{ session('successMsg') }}
                </div>
            @endif

        </div>
        <div class="container pt-4">

            <h1>Edit product</h1>
            <form action="/products/{{ $product->id }}" method="POST" enctype="multipart/form-data">
                @method('PATCH')
                @csrf
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" value={{ $product->name }}>
                    @error('name')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" name="description" class="form-control" value={{ $product->description }}>
                    @error('description')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="category">Category </label>
                    <br>

                    <select name="category" id="category">
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}"
                                selected={{ $product->category_id == $category->id ? 'selected' : '' }}>
                                {{ $category->title }}</option>
                        @endforeach
                    </select>

                    @error('category')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="sale">Sale available</label>
                    <br>

                    <select name="sale" id="sale">
                        {{-- <option value="">No sale</option> --}}
                        @foreach ($sales as $sale)
                            <option value="{{ $sale->id }}"
                                selected={{ $product->sale_id == $sale->id ? 'selected' : '' }}>
                                {{ $sale->description }}</option>
                        @endforeach
                    </select>

                    @error('sale')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <h2>Old Image</h2>
                    <img src={{ asset('/storage/' . $product->image) }} />
                    <label for="image">Image</label>
                    <input type="file" name="image" class="form-control" multiple>
                    @error('image')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" name="price" class="form-control" value={{ $product->price }}>
                    @error('price')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="priceWithDiscount">Price with discount</label>
                    <input type="number" name="priceWithDiscount" class="form-control"
                        value={{ $product->priceWithDiscount }}>
                    @error('priceWithDiscount')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="stock">Stock</label>
                    <input type="number" name="stock" class="form-control" value={{ $product->stock }}>
                    @error('stock')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <button type="submit" class="btn btn-primary">Add</button>

            </form>
        </div>

    </main>

</x-app-layout>
