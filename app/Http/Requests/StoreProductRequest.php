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
            'name' => 'unique:products|required|string|min:3|max:100',
            'description' => 'required',
            'categoryId' => 'required',
            'saleId' => 'required',
            'image' => 'image|mimes:jpg,png,jpeg|max:10000',
            'price' => 'required',
            'quantity' => 'required',
        ];
    }
}
