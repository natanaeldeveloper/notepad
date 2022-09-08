<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class StoreUserRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'      => ['required', 'min:3', 'max:100', 'alpha'],
            'email'     => ['required', 'email', 'unique:users'],
            'password'  => ['required', 'min:6', 'alpha_num', 'confirmed'],
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        // throw (new ValidationException($validator))->errorBag($this->errorBag);
        return 'a';
    }
}
