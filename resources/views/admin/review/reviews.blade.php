<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('All products') }}
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
                    <a href="{{ url('/products') }}" class="list-group-item list-group-item-action py-2 ripple">
                        <i class="fas fa-chart-area fa-fw me-3"></i><span>Products</span>
                    </a>
                    <a href="{{ url('/reviews') }}" class="list-group-item list-group-item-action py-2 ripple active"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>Review</span></a>
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
        <div class="container pt-4">
            @if (session('successMsg'))
                <div class="alert alert-success" role="alert">
                    {{ session('successMsg') }}
                </div>
            @endif
            <div class="container pt-4">
                <h1>All reviews</h1>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">User Id</th>
                            <th scope="col">Rating</th>
                            <th scope="col">User_name</th>
                            <th scope="col">User_comment</th>
                            <th scope="col">Created_at</th>
                            <th scope="col">Updated_at</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($reviews as $review)
                            <tr>
                                <th scope="col">{{ $review->id }}</th>
                                <th scope="col">{{ $review->product_id }}</th>
                                <th scope="col">{{ $review->user_id }}</th>
                                <th scope="col">{{ $review->rating }}</th>
                                <th scope="col">{{ $review->user_name }}</th>
                                <th scope="col">{{ $review->user_comment }}</th>
                                <th scope="col">{{ $review->created_at }}</th>
                                <th scope="col">{{ $review->updated_at }}</th>
                               
                                <th scope="col">
                                    <form action="/reviews/{{$review->id}}" method="POST"
                                        onclick="return confirm('Are you sure you want to delete this review?')">
                                        @method('DELETE')
                                        @csrf
                                        <button class="btn btn-danger" type="submit">Delete</button>
                                    </form>

                                </th>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

                {{ $reviews->links() }}

                
            </div>
        </div>
    </main>

</x-app-layout>
