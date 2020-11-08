import React, { useEffect } from 'react'

export const List = () => {
    // useEffect(() => {
    //     effect
        
    // }, [input])

    return (
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Noe</td>
            <td>Horo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Kik</td>
            <td>Pepmeyer</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Kevin</td>
            <td>Kim</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Wyatt</td>
            <td>Marvil</td>
          </tr>
        </tbody>
      </table>
    )
}
