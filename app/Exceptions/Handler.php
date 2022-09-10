<?php

namespace App\Exceptions;

use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {

        $this->reportable(function (Throwable $e) {
            //
        });

        if(config('app.env') == 'production') {
            $this->renderableProduction();
        }
    }

    public function renderableProduction()
    {
        $this->renderable(function (QueryException $e, $request) {

            return response()->json([
                'title'     => 'Server connection error.',
                'status'    => 500
            ], 500);
        });

        $this->renderable(function (NotFoundHttpException $e, $request) {

            return response()->json([
                'title'     => 'Resource not found.',
                'status'    => 404
            ], 404);
        });

        $this->renderable(function (HttpException $e, $request) {

            return response()->json([
                'title'     => $e->getMessage(),
                'status'    => $e->getStatusCode(),
            ], $e->getStatusCode());
        });
    }
}
