<?php
namespace Nitseditor\Framework\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'role' => $this->roleName->name,
            'role_id' => $this->role_id,
            'permissions' => collect($this->roleName->pages)->pluck('name')->map(function ($item) {
                return [
                    $item, 'view'
                ];
            })->toArray()
        ];
    }
}
