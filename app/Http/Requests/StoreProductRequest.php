<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'product_name' => 'required|string|max:100',
            'product_description' => 'required',
            'product_category_title' => 'required',
            'product_sale_description' => 'required',
            'product_image' => 'required|image|mimes:jpg,jpeg,png',
            'product_price' => 'required',
            'product_priceWithDiscount' => 'required',
            'product_stock' => 'required',
        ];
    }
}
