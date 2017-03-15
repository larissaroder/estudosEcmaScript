class NegociacoesView extends View{

	constructor(elemento) {
		super(elemento);
	}

	template (modelo) {
		return `
			<table class="table table-hover table-bordered">
		        <thead>
		            <tr>
		                <th>DATA</th>
		                <th>QUANTIDADE</th>
		                <th>VALOR</th>
		                <th>VOLUME</th>
		            </tr>
		        </thead>
		        
		        <tbody>
		        </tbody>
		        	${modelo.negociacoes.map((n) => {
		        		return `
		        			<tr>
		        				<td>
		        					${n.data}
		        				</td>
		        				<td>
		        					${n.quantidade}
		        				</td>
		        				<td>
		        					${n.valor}
		        				</td>
		        				<td>
		        					${n.volume}
		        				</td>
		        			</tr>
		        		`;
		        	}).join('')}
		        <tfoot>
		        </tfoot>
		    </table>
		`;
	}

}
