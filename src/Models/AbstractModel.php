<?php

namespace Nitseditor\Framework\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Crypt;

class AbstractModel extends Model
{
    use SoftDeletes;

    protected $nits_encryption = [];

    protected $guarded = ['id'];

    protected static function boot()
    {
        parent::boot();

        if(env('APP_ENV') == 'prod')
        {
            // Decrypt the nits_encryption attributes.
            static::retrieved(function ($instance) {
                foreach ($instance->nits_encryption as $encryptedKey) {
                    $instance->attributes[$encryptedKey] = Crypt::decryptString($instance->attributes[$encryptedKey]);
                }
            });

            // Encrypt the nits_encryption attributes.
            static::saving(function ($instance) {
                foreach ($instance->nits_encryption as $encryptedKey) {
                    $instance->attributes[$encryptedKey] = Crypt::encryptString($instance->attributes[$encryptedKey]);
                }
            });
        }
    }
}
